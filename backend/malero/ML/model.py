import os
import tensorflow as tf
from PIL import Image
import numpy as np
# load the best model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Sequential
import tensorflow as tf

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

    @staticmethod
    def file_to_png(infile_path, outfile_path, dimensions=(128, 128)):
        try:
            with open(infile_path, 'rb') as infile:
                byte_data = infile.read()
                img = Image.new('RGB', dimensions)
                pixels = img.load()
                byte_index = 0
                for y in range(dimensions[1]):
                    for x in range(dimensions[0]):
                        r = byte_data[byte_index] if byte_index < len(byte_data) else 0
                        g = byte_data[byte_index + 1] if byte_index + 1 < len(byte_data) else 0
                        b = byte_data[byte_index + 2] if byte_index + 2 < len(byte_data) else 0
                        pixels[x, y] = (r, g, b)
                        byte_index += 3
                img.save(outfile_path, format="PNG")
        except Exception as e:
            print(f"Error processing file {infile_path}: {str(e)}")

    @staticmethod
    def convert_binaries_to_images(src_folder,file_name, dest_folder, dimensions=(128, 128)):
        if not os.path.exists(dest_folder):
            os.makedirs(dest_folder)
            print(file_name,"file_name in convert_binaries_to_images 1")
            
        if file_name.endswith(".bin"):
            print(file_name,"file_name in convert_binaries_to_images")
            src_file_path = os.path.join(src_folder, file_name)
            dest_file_path = os.path.join(dest_folder, file_name.replace('.bin', '.png'))
            ML_Model.file_to_png(src_file_path, dest_file_path, dimensions)    

    @staticmethod
    def predict( image_path, model_path):
        reconstructed_model = tf.keras.Sequential([
            tf.keras.applications.EfficientNetB0(include_top=False, weights="imagenet", input_shape=(128, 128, 3)),
            GlobalAveragePooling2D(),
            Dense(1, activation='sigmoid')
        ])
        reconstructed_model.load_weights(model_path)
        img = Image.open(image_path).resize((128, 128))
        img_array = np.expand_dims(img, axis=0)
        prediction = reconstructed_model.predict(img_array)
        return prediction[0, 0]
        