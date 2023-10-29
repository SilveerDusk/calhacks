import reflex as rx
from webui.state import State

def img() -> rx.Component:
    """Image element"""
    return rx.image(
        src="teamphoto.jpeg",
        alt="TeamPhoto",
        border_radius="15px 50px",
        width="700px",
        height="500px",
        justify="space-between"
    )