# Generated by Django 4.0.10 on 2024-07-13 08:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('cardNumber', models.BigIntegerField(primary_key=True, serialize=False)),
                ('nameOnCard', models.CharField(blank=True, max_length=50)),
                ('expiryDate', models.IntegerField(blank=True)),
                ('cvv', models.IntegerField(blank=True)),
                ('value', models.IntegerField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Coupons',
            fields=[
                ('couponCode', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('isPercentage', models.BooleanField(default=False)),
                ('numberOfUses', models.IntegerField(blank=True)),
                ('discount', models.IntegerField(blank=True)),
                ('expiryDate', models.DateTimeField(blank=True, max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('fullName', models.CharField(blank=True, max_length=60)),
                ('email', models.CharField(blank=True, max_length=60, unique=True)),
                ('userName', models.CharField(blank=True, max_length=50, primary_key=True, serialize=False)),
                ('password', models.CharField(blank=True, max_length=300)),
                ('maxOfuploads', models.IntegerField(blank=True, default=3)),
                ('numberOfuploads', models.IntegerField(blank=True, default=0)),
                ('availableUploads', models.IntegerField(blank=True, default=3)),
                ('startTimeForPackage', models.DateTimeField(blank=True, default='2021-01-01 00:00:00')),
                ('endTimeForPackage', models.DateTimeField(blank=True, default='2021-01-01 00:00:00')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='ImageUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='malero/uploads/images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('orderNumber', models.AutoField(primary_key=True, serialize=False)),
                ('fullName', models.CharField(blank=True, max_length=60)),
                ('email', models.CharField(blank=True, max_length=100)),
                ('phoneNumber', models.IntegerField(blank=True)),
                ('country', models.CharField(blank=True, max_length=60)),
                ('period', models.CharField(blank=True, max_length=30)),
                ('cost', models.IntegerField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('card', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.cards')),
                ('coupon', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.coupons')),
            ],
        ),
        migrations.CreateModel(
            name='Packages',
            fields=[
                ('packageImage', models.CharField(blank=True, max_length=400)),
                ('frontName', models.CharField(blank=True, max_length=30)),
                ('packageName', models.CharField(blank=True, max_length=30, primary_key=True, serialize=False)),
                ('pricePmonth', models.IntegerField()),
                ('pricePyear', models.IntegerField()),
                ('features', models.CharField(max_length=1000)),
                ('numberOfuploadsPerMonth', models.IntegerField(blank=True, default=3)),
                ('numberOfuploadsPerYear', models.IntegerField(blank=True, default=3)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='PdfUpload',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('pdf', models.FileField(upload_to='malero/uploads/pdfs/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Uploads',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.CharField(blank=True, max_length=400)),
                ('pdf', models.CharField(blank=True, max_length=400)),
                ('isBenign', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('orderNumber', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='malero.orders')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='malero.customers')),
            ],
        ),
        migrations.AddField(
            model_name='orders',
            name='package',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.packages'),
        ),
        migrations.AddField(
            model_name='orders',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='malero.customers'),
        ),
        migrations.AddField(
            model_name='customers',
            name='package',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.packages'),
        ),
    ]
