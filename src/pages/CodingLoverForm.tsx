import  { useState, ChangeEvent, FormEvent } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  gender: string;
  theme: string;
  bugReaction: string;
  mergeConflicts: string;
  musicPreference: string;
  codingLanguage: string;
  motivation: string;
}

interface FormErrors {
  email?: string;
  gender?: string;
  theme?: string;
  bugReaction?: string;
  mergeConflicts?: string;
  musicPreference?: string;
  codingLanguage?: string;
  motivation?: string;
}

function CodingLoverForm() {
const navigate = useNavigate(); // For navigation after successful submission

  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    gender: '',
    theme: '',
    bugReaction: '',
    mergeConflicts: '',
    musicPreference: '',
    codingLanguage: '',
    motivation: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
const validateForm = (): boolean => {
  let formErrors: FormErrors = {};

  if (!formValues.email.trim()) formErrors.email = "Email is required";
  if (!formValues.gender) formErrors.gender = "Please select a gender preference";
  if (!formValues.theme) formErrors.theme = "Please select a theme preference";
  if (!formValues.bugReaction) formErrors.bugReaction = "Please select your bug reaction";
  if (!formValues.mergeConflicts) formErrors.mergeConflicts = "Please select how you handle merge conflicts";
  if (!formValues.musicPreference) formErrors.musicPreference = "Please select music preference while coding";

  // If there are errors, update state and prevent form submission
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    console.log("Form validation failed", formErrors); // Debugging info
    return false;
  }

  // If no errors, clear the error state
  setErrors({});
  console.log("Form validation succeeded"); // Debugging info
  return true;
};


const handleSubmit = (e: FormEvent) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Validate form before redirecting
  if (validateForm()) {
    // If form is valid, navigate to the /video page
    console.log("Navigating to /video");
    navigate('/video');
  } else {
    console.log("Form is not valid, no navigation");
  }
};





    
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-pink-200 p-4">
      <div className="bg-gradient-to-b from-pink-500 to-orange-400 rounded-lg p-8 shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">Coding Lover</h1>
          <p className="text-white text-lg">Find your soulmate, developer edition!</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white">Your Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                placeholder="e.g. yourname@gmail.com"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="text-white">Looking for?</label>
              <select
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">Choose the gender you're interested in</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="SheMale">SheMale</option>
                <option value="Anindo">Anindo</option>
                <option value="other">Other🌈</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white">Theme Preference</label>
              <select
                name="theme"
                value={formValues.theme}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                <option value="">Theme Preference</option>
                <option value="Light">Light 🌞</option>
                <option value="Dark">Dark 🌚</option>
              </select>
              {errors.theme && <p className="text-red-500">{errors.theme}</p>}
            </div>
            <div>
              <label className="text-white">Bug Reaction</label>
              <select
                name="bugReaction"
                value={formValues.bugReaction}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="">Bug Reaction</option>
                <option value="Keep clam and fix the bug">Keep clam and fix the bug</option>
                <option value="Panic mode and open chatGpt">Panic mode and open chatGpt</option>
              </select>
              {errors.bugReaction && <p className="text-red-500">{errors.bugReaction}</p>}
            </div>
          </div>

          {/* Additional form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white">Handle Merge Conflicts</label>
              <select
                name="mergeConflicts"
                value={formValues.mergeConflicts}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        >
            <option value="Handle Merge Conflicts">Handle Merge Conflicts</option>
                <option value="PeaceFully Resolve 🤌🏽">PeaceFully Resolve 🤌🏽</option>
                <option value="Git push --force chal too jayaga">Git push --force chal too jayaga </option>
              </select>
              {errors.mergeConflicts && <p className="text-red-500">{errors.mergeConflicts}</p>}
            </div>
            <div>
              <label className="text-white">Listen to Music while Coding?</label>
              <select
                name="musicPreference"
                value={formValues.musicPreference}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="Listen to Music while Coding">Listen to Music while Coding</option>
                <option value="Yes">Yes 😃</option>
                <option value="No">No 😒</option>
              </select>
              {errors.musicPreference && <p className="text-red-500">{errors.musicPreference}</p>}
            </div>
          </div>

          {/* Add other fields in a similar way... */}

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

export default CodingLoverForm