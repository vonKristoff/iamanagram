import csv
import yaml
import os
from datetime import datetime

class QuotedString(str):
    pass

def quoted_presenter(dumper, data):
    return dumper.represent_scalar('tag:yaml.org,2002:str', data, style='"')
def kebab_case(s):
    return s.strip().replace('/', '-').replace(' ', '-').lower()
yaml.add_representer(QuotedString, quoted_presenter)

input_csv = 'xib.csv'
output_dir = 'src/content/exhibitions'

os.makedirs(output_dir, exist_ok=True)

with open(input_csv, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for idx, row in enumerate(reader, start=1):
        url = row.get("url", "").strip()
        date_to = row.get("date", "").strip()
        date_obj = datetime.strptime(date_to, "%d/%m/%Y")
        formatted_date = date_obj.strftime("%Y-%m-%d")
        date_prefix = kebab_case(formatted_date) if date_to else ""

        if not url or not date_prefix:
            # Skip this row if slug or date_prefix is missing/empty
            continue

        filename = f"{date_prefix}-{row['url']}.md"
        filepath = os.path.join(output_dir, filename)
        quoted_row = {k: QuotedString(v if v is not None else "") for k, v in row.items()}
        with open(filepath, 'w', encoding='utf-8') as yamlfile:
            yamlfile.write('---\n')
            yaml.dump(quoted_row, yamlfile, default_flow_style=False, allow_unicode=True)
            yamlfile.write('---\n')