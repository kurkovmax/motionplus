import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { ContactForm as ContactFormType } from '../types';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      comment: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gray-900 rounded-lg max-w-md w-full mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6">Leave a request</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <textarea
              name="comment"
              placeholder="Tell us about your project"
              value={formData.comment}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-3 rounded-sm hover:bg-red-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Send size={18} />
                <span>Send Request</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;