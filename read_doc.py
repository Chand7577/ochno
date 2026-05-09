import zipfile
import re

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml').decode('utf-8')
            # Replace w:p with newline to separate paragraphs
            text_blocks = re.sub(r'<w:p [^>]*>', '\n', xml_content)
            # Remove all other XML tags
            text_blocks = re.sub(r'<[^>]+>', '', text_blocks)
            # Write to file
            with open("doc_output_quartz.txt", "w", encoding="utf-8") as f:
                f.write(text_blocks)
            print("Successfully wrote to doc_output_quartz.txt")
    except Exception as e:
        print("Error:", e)

read_docx("c:/Users/2 - Grandeur Net/Desktop/clients/och/src/assets/docs/Quartz page.docx")
