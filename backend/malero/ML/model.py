import os
from PIL import Image
class ML_Model:
    @staticmethod
    def convert_to_binary(input_folder,file_name ,output_folder):
        # Create the output directory if it doesn't exist
        os.makedirs(output_folder, exist_ok=True)
            # Get the full file path
        print(file_name,"file_name")
        file_path = os.path.join(input_folder, file_name)
            # Ensure it's a file before reading
        if os.path.isfile(file_path):
                # Construct the output file path
                output_file_path = os.path.join(output_folder, file_name + '.bin')
                print(output_file_path,"output_file_path")
                # Open the input file and read data
                with open(file_path, 'rb') as file:
                    data = file.read()

                    # Open the output file and write data in binary format
                    with open(output_file_path, 'wb') as output_file:
                        output_file.write(data)


# # Paths to the input directories
# benign_pdfs = 'Benign_PDF'
# mal_pdfs = 'Mal_PDF'

# # Paths to the output directories
# benign_bins = 'Benign_bin'
# mal_bins = 'Mal_bin'

# # Convert PDFs to binary format and save in corresponding directories
# convert_to_binary(benign_pdfs,"Lec_1_2.pdf", benign_bins)