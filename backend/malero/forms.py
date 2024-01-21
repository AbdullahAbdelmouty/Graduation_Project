from django import forms
from .models import ImageUpload, ImageUpload, PdfUpload

class UploadForm(forms.ModelForm):
    class Meta:
        model = ImageUpload
        fields = ['image']
        labels = {'image': 'Image'}
        widgets = {'image': forms.FileInput(attrs={'class': 'form-control-file'})}

class PdfUploadForm(forms.ModelForm):
    class Meta:
        model = PdfUpload
        fields = ['pdf']
        labels = {'pdf': 'Pdf'}
        widgets = {'pdf': forms.FileInput(attrs={'class': 'form-control-file'})}
        
        