from django.db import models

# Create your models here.
class Event(models.Model):
    img=models.ImageField(upload_to="pic")
    name=models.CharField(max_length=50)
    desc=models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Booking(models.Model):
    cus_name=models.CharField(max_length=55)
    cus_ph=models.CharField(max_length=12)
    name=models.ForeignKey(Event,on_delete=models.CASCADE)
    booking_date=models.DateField()
    booked_on=models.DateField(auto_now=True)
# eventapp/models.py



class Menu(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True)

    def _str_(self):
        return self.name