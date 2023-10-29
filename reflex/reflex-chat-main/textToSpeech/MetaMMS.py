
from bark import SAMPLE_RATE, generate_audio, preload_models
from IPython.display import Audio
from scipy.io.wavfile import write as write_wav
import subprocess

# download and load all models
#preload_models()

# generate audio from text
text_prompt = """
     Hello, my name is Suno. And, uh — and I like pizza. [laughs] 
     But I also have other interests such as playing tic tac toe.
"""
audio_array = generate_audio(text_prompt)


write_wav("reflex/reflex-chat-main/textToSpeech/audio.wav", SAMPLE_RATE, audio_array)


audio_file = "reflex/reflex-chat-main/textToSpeech/audio.wav"
return_code = subprocess.call(["afplay", audio_file])

