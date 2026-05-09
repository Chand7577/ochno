import zipfile
import re
import os

def read_docx(file_path, output_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml').decode('utf-8')
            # Replace w:p with newline to separate paragraphs
            text_blocks = re.sub(r'<w:p [^>]*>', '\n', xml_content)
            # Remove all other XML tags
            text_blocks = re.sub(r'<[^>]+>', '', text_blocks)
            # Write to file
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(text_blocks)
            print(f"Successfully wrote to {output_path}")
    except Exception as e:
        print("Error:", e)

file_path = r"c:\Users\2 - Grandeur Net\Desktop\clients\och\src\assets\docs\Nano_Products_Short.docx"
output_path = r"c:\Users\2 - Grandeur Net\Desktop\clients\och\nano_products_text.txt"
read_docx(file_path, output_path)
