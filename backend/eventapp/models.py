from django.db import models

# -------------------- Event --------------------
class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title

# -------------------- EventImage --------------------
class EventImage(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='event_images/')

    def __str__(self):
        return f"Image for {self.event.title}"

# -------------------- ContactMessage --------------------
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):  # fixed typo here
        return f"Message from {self.name}"

# -------------------- Booking --------------------
class Booking(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    number_of_guests = models.PositiveIntegerField()

    def __str__(self):
        return f"Booking by {self.name} for {self.event.title}"
