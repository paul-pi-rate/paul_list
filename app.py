import streamlit as st
import random

# ------------------------------
# Sample list of quotes
# ------------------------------
quotes = [
    {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"text": "Life is what happens when you're busy making other plans.", "author": "John Lennon"},
    {"text": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"text": "The best way to predict the future is to create it.", "author": "Peter Drucker"},
    {"text": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
    {"text": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
    {"text": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
    {"text": "Happiness is not something ready made. It comes from your own actions.", "author": "Dalai Lama"},
]

# ------------------------------
# Function to get random quote
# ------------------------------
def get_random_quote():
    return random.choice(quotes)

# ------------------------------
# Streamlit App UI
# ------------------------------
st.set_page_config(page_title="Random Quote Generator", page_icon="📝", layout="centered")

st.title("📝 Random Quote Generator")

# Generate or refresh quote
if 'quote' not in st.session_state:
    st.session_state.quote = get_random_quote()

if st.button("🔄 New Quote"):
    st.session_state.quote = get_random_quote()

# Display the quote
st.markdown(
    f"""
    <div style="padding: 20px; background-color: #f0f2f6; border-radius: 10px;">
        <h3 style="color: #333;">“{st.session_state.quote['text']}”</h3>
        <p style="text-align: right; font-style: italic; margin-top: 10px;">- {st.session_state.quote['author']}</p>
    </div>
    """,
    unsafe_allow_html=True
)

# Footer
st.markdown("---")
st.markdown("✅ Built with [Streamlit](https://streamlit.io/)")
