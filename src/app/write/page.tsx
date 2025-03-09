"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function WriteStory() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    title: '',
    story: '',
    useCase: '',
    benefits: '',
    challenges: '',
    contactConsent: false,
    publishConsent: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.story || !formData.publishConsent) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields and accept the publishing consent.'
      });
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for sharing your story! Our team will review it shortly.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      title: '',
      story: '',
      useCase: '',
      benefits: '',
      challenges: '',
      contactConsent: false,
      publishConsent: false,
    });
  };

  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Soplang Story</h1>
          <p className="text-xl max-w-3xl">
            Tell us how you're using Soplang and inspire others in the community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          {formStatus.submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4 text-green-500">✓</div>
              <h2 className="text-2xl font-bold mb-4">Submission Received!</h2>
              <p className="mb-6">{formStatus.message}</p>
              <Link href="/success-stories" className="btn-primary">
                View Success Stories
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-primary">Your Success Story Details</h2>
              
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Personal Information */}
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="company">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="role">
                      Your Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                
                {/* Story Details */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1" htmlFor="title">
                    Story Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="E.g., How Soplang Improved Our Development Workflow"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1" htmlFor="story">
                    Your Success Story <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us how you're using Soplang and what impact it has had..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1" htmlFor="useCase">
                    Primary Use Case
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a use case</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science & Analysis</option>
                    <option value="education">Education & Teaching</option>
                    <option value="automation">Automation & Scripting</option>
                    <option value="enterprise">Enterprise Applications</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="benefits">
                      Key Benefits Experienced
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      value={formData.benefits}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What benefits have you seen from using Soplang?"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="challenges">
                      Challenges Overcome
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What challenges did Soplang help you overcome?"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                </div>
                
                {/* Consent Checkboxes */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="contactConsent"
                      name="contactConsent"
                      checked={formData.contactConsent}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="contactConsent" className="text-sm">
                      I consent to being contacted by the Soplang team for follow-up questions about my story.
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="publishConsent"
                      name="publishConsent"
                      checked={formData.publishConsent}
                      onChange={handleCheckboxChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="publishConsent" className="text-sm">
                      I consent to having my story published on the Soplang website and potentially used in marketing materials. <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Link 
                    href="/success-stories" 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button 
                    type="submit" 
                    className="btn-primary"
                  >
                    Submit Your Story
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="container-custom py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">Tips for a Great Success Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Be specific about how Soplang helped you</li>
                <li>Include measurable results when possible</li>
                <li>Mention specific features that were valuable</li>
                <li>Share your personal experience and insights</li>
                <li>Keep it authentic and in your own voice</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Avoid:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Generic praise without specific examples</li>
                <li>Including sensitive or confidential information</li>
                <li>Technical jargon that might confuse others</li>
                <li>Focusing only on limitations or issues</li>
                <li>Submitting very short or incomplete stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 