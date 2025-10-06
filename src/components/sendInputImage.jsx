
import React, { useState, useRef } from "react";
import { FaSmile, FaPaperclip } from "react-icons/fa";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
   const {selectedUser} = useSelector(store => store.user)
   const {messages} = useSelector(store => store.message)
  const token = localStorage.getItem("chat_app_token")
  const dispatch = useDispatch()

  // Handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle send
  const handleSendMessage = async(e) => {
    e.preventDefault();
    if (!message.trim() && !image) return;

    try {

      let formData = new FormData()
      formData.append("message", message)
      if(image){
        formData.append("image", image?.file)
      }

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/send/${selectedUser?._id}`,
             formData,
            {
              headers:{
               Authorization: `Bearer ${token}`,
            },
            withCredentials:true
            }
            
          )

          dispatch(setMessages([...messages , res?.data?.newMessage]))
      // Reset after send
      setMessage("");
      setImage(null);
    } catch (error) {
      console.log('error', error)
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4 relative">
      {/* Image preview */}
      {image && (
        <div className="mb-3 flex items-center space-x-3">
          <img
            src={image.preview}
            alt="preview"
            className="w-20 h-20 object-cover rounded-lg border border-gray-600"
          />
          <button
            onClick={() => setImage(null)}
            className="text-red-400 hover:text-red-600"
          >
            ✕
          </button>
        </div>
      )}

      <form
        className="flex items-center space-x-3"
        onSubmit={handleSendMessage}
      >
        {/* Emoji button */}
        <button
          type="button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="text-gray-400 hover:text-yellow-400 cursor-pointer"
        >
          <RiEmojiStickerLine size={24} />
        </button>

        {/* Image upload button */}
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <FaPaperclip size={22} />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Message input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
        />

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim() && !image}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all transform hover:scale-105 active:scale-95"
        >
          <IoSend size={20} />
        </button>
      </form>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-20 left-4">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default SendInput;
