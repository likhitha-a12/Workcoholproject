

from django.contrib import admin
from .models import Event, EventImage, Booking, ContactMessage

# Inline for adding images directly when adding/editing an event
class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 3

# Custom admin for Event with inline images
class EventAdmin(admin.ModelAdmin):
    inlines = [EventImageInline]



# Registering all models
admin.site.register(Event, EventAdmin)
admin.site.register(Booking) # Registered only once with custom admin
admin.site.register(ContactMessage)
