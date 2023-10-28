"""Welcome to Reflex!."""

from reflex_chat_main import styles

# Import all the pages.
from reflex_chat_main.pages import *

import reflex as rx

# Create the app and compile it.
app = rx.App(style=styles.base_style)
app.compile()
