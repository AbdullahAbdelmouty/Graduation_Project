# Generated by Django 4.0.10 on 2023-12-12 19:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('malero', '0010_remove_packages_keyname_packages_namefront_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='packages',
            name='NameFront',
        ),
    ]
