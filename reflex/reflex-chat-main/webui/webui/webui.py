"""The main Chat app."""

import reflex as rx

from webui import styles
from webui.components import chat, modal, navbar, sidebar, img
from webui.state import State

def index() -> rx.Component:
    """Home Project Page"""
    return rx.vstack(
        navbar(),
        modal(),
        img.img(),
        bg=styles.bg_dark_color,
        color=styles.text_light_color,
        min_h="100vh",
        align_items="stretch",
        spacing="0",
    )


def AIFred() -> rx.Component:
    """The main app."""
    return rx.vstack(
        navbar(),
        chat.chat(),
        chat.action_bar(),
        sidebar(),
        modal(),
        bg=styles.bg_dark_color,
        color=styles.text_light_color,
        min_h="100vh",
        align_items="stretch",
        spacing="0",
    )


# Add state and page to the app.
app = rx.App(state=State, style=styles.base_style)
app.add_page(index)
app.add_page(AIFred, route="/AIFred")
app.compile()
