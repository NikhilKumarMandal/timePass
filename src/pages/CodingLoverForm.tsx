import { useState, ChangeEvent, FormEvent } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  gender: string;
  theme: string;
  instagram: string;
  personality: string;
  musicPreference: string;
  dateIdea: string;
  motivation: string;
}

interface FormErrors {
  name?: string;
  gender?: string;
  theme?: string;
  instagram?: string;
  personality?: string;
  musicPreference?: string;
  dateIdea?: string;
  motivation?: string;
}

function LoveFinderForm() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    gender: '',
    theme: '',
    instagram: '',
    personality: '',
    musicPreference: '',
    dateIdea: '',
    motivation: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    let formErrors: FormErrors = {};

    if (!formValues.name.trim()) formErrors.name = "Name is required";
    if (!formValues.gender) formErrors.gender = "Please select a gender preference";
    if (!formValues.theme) formErrors.theme = "Please select a theme preference";
    if (!formValues.instagram.trim()) formErrors.instagram = "Instagram ID is required";
    if (!formValues.personality) formErrors.personality = "Please select your personality type";
    if (!formValues.musicPreference) formErrors.musicPreference = "Please select music preference";
    if (!formValues.dateIdea) formErrors.dateIdea = "Please select your ideal date";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/video');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-pink-200 p-4">
      <div className="bg-gradient-to-b from-pink-500 to-orange-400 rounded-lg p-8 shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">Find Your Soulmate 💖</h1>
          <p className="text-white text-lg">Because love is just one form away!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-white">Your Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="text-white">Instagram ID</label>
            <input
              type="text"
              name="instagram"
              value={formValues.instagram}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              placeholder="@yourinstagram"
            />
            {errors.instagram && <p className="text-red-500">{errors.instagram}</p>}
          </div>

          <div>
            <label className="text-white">Looking for?</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Choose your preference</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other 🌈</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          <div>
            <label className="text-white">Personality Type</label>
            <select
              name="personality"
              value={formValues.personality}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Select your personality</option>
              <option value="introvert">Introvert 🤫</option>
              <option value="extrovert">Extrovert 🎉</option>
              <option value="ambivert">Ambivert 🔥</option>
            </select>
            {errors.personality && <p className="text-red-500">{errors.personality}</p>}
          </div>

          <div>
            <label className="text-white">Listen to Music while Chilling?</label>
            <select
              name="musicPreference"
              value={formValues.musicPreference}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Do you vibe with music?</option>
              <option value="Yes">Yes 🎵</option>
              <option value="No">No 🙅‍♂️</option>
            </select>
            {errors.musicPreference && <p className="text-red-500">{errors.musicPreference}</p>}
          </div>

          <div>
            <label className="text-white">Your Ideal Date Idea</label>
            <select
              name="dateIdea"
              value={formValues.dateIdea}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Choose your dream date</option>
              <option value="Dinner">Romantic Dinner 🍽️</option>
              <option value="Beach Walk">Beach Walk 🌊</option>
              <option value="Movie Night">Movie Night 🍿</option>
              <option value="Adventure">Adventure Trip 🏕️</option>
            </select>
            {errors.dateIdea && <p className="text-red-500">{errors.dateIdea}</p>}
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition"
            >
              Find My Match 💖
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoveFinderForm;
