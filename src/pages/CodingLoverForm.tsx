import { useState, ChangeEvent, FormEvent } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  age: string;
  instagram: string;
  gender: string;
  hobbies: string;
  firstDate: string;
  movieGenre: string;
  loveAtFirstSight: string;
  loveLanguage: string;
}

interface FormErrors {
  name?: string;
  age?: string;
  instagram?: string;
  gender?: string;
  hobbies?: string;
  firstDate?: string;
  movieGenre?: string;
  loveAtFirstSight?: string;
  loveLanguage?: string;
}

function SoulmateFinderForm() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    age: '',
    instagram: '',
    gender: '',
    hobbies: '',
    firstDate: '',
    movieGenre: '',
    loveAtFirstSight: '',
    loveLanguage: '',
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
    if (!formValues.age.trim()) formErrors.age = "Age is required";
    if (!formValues.instagram.trim()) formErrors.instagram = "Instagram username is required";
    if (!formValues.gender) formErrors.gender = "Please select a gender preference";
    if (!formValues.hobbies) formErrors.hobbies = "Please select a hobby";
    if (!formValues.firstDate) formErrors.firstDate = "Please select an ideal first date";
    if (!formValues.movieGenre) formErrors.movieGenre = "Please select a movie genre";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation failed", formErrors);
      return false;
    }

    setErrors({});
    console.log("Form validation succeeded");
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Navigating to /video");
      navigate('/video');
    } else {
      console.log("Form is not valid, no navigation");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4">
      <div className="bg-gradient-to-b from-purple-500 to-orange-400 rounded-lg p-8 shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">Find Your Soulmate 💖</h1>
          <p className="text-white text-lg">Discover you perfect match here!</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Name & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white">Your Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm"
                placeholder="e.g. aman"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="text-white">Your Age</label>
              <input
                type="number"
                name="age"
                value={formValues.age}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm"
                placeholder="e.g. 24"
              />
              {errors.age && <p className="text-red-500">{errors.age}</p>}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <label className="text-white">Your Instagram Username</label>
            <input
              type="text"
              name="instagram"
              value={formValues.instagram}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm"
              placeholder="e.g. @yourhandle"
            />
            {errors.instagram && <p className="text-red-500">{errors.instagram}</p>}
          </div>

          {/* Gender Preference */}
          <div>
            <label className="text-white">Looking for?</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md shadow-sm"
            >
              <option value="">Select preference</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="any">Anyone 💖</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          {/* Hobbies */}
          <div>
            <label className="text-white">Your Hobbies</label>
            <select name="hobbies" value={formValues.hobbies} onChange={handleChange} className="w-full mt-1 p-2 rounded-md shadow-sm">
              <option value="">Select a hobby</option>
              <option value="travel">Traveling</option>
              <option value="music">Music</option>
              <option value="reading">Reading</option>
              <option value="sports">Sports</option>
            </select>
            {errors.hobbies && <p className="text-red-500">{errors.hobbies}</p>}
          </div>

          {/* First Date Preference */}
          <div>
            <label className="text-white">Your Ideal First Date</label>
            <select name="firstDate" value={formValues.firstDate} onChange={handleChange} className="w-full mt-1 p-2 rounded-md shadow-sm">
              <option value="">Choose one</option>
              <option value="dinner">Romantic Dinner</option>
              <option value="movies">Movie Night</option>
              <option value="adventure">Adventure Trip</option>
              <option value="coffeeshop">Coffee Date</option>
            </select>
            {errors.firstDate && <p className="text-red-500">{errors.firstDate}</p>}
          </div>

          {/* Movie Genre */}
          <div>
            <label className="text-white">Favorite Movie Genre</label>
            <select name="movieGenre" value={formValues.movieGenre} onChange={handleChange} className="w-full mt-1 p-2 rounded-md shadow-sm">
              <option value="">Choose one</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
            </select>
            {errors.movieGenre && <p className="text-red-500">{errors.movieGenre}</p>}
          </div>

          <div className="mt-6 text-center">
            <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
              Find My Soulmate 💖
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default SoulmateFinderForm;
