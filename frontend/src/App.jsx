import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  //const [jobLink, setJobLink] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const fetchJobs = async () => {
    const res = await axios.get(`${API}/jobs`);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async () => {
    if (!company || !role) return alert("Fill all fields");

    await axios.post(`${API}/jobs`, { company, role });
    setCompany("");
    setRole("");
    fetchJobs();
  };

  const updateStatus = async (id, status) => {
    await axios.put(`${API}/jobs/${id}`, { status });
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(`${API}/jobs/${id}`);
    fetchJobs();
  };

  // const addFromLink = async () => {
  //   if (!jobLink) return alert("Paste job link");

  //   await axios.post(`${API}/jobs/from-link`, { url: jobLink });, {
  //     url: jobLink,
  //   });

  //   setJobLink("");
  //   fetchJobs();
  // };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700 border-blue-400";
      case "Interview":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      case "Offer":
        return "bg-green-100 text-green-700 border-green-400";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-400";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Job Application Tracker 💼
        </h1>
        {/* <h2 className="mt-4 mb-2 font-semibold">Paste Naukri Job Link</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            className="border p-2 rounded w-full"
            placeholder="Paste Naukri job URL"
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
          />
          <button
            onClick={addFromLink}
            className="bg-purple-500 text-white px-4 rounded hover:bg-purple-600"
          >
            Auto Add
  </button> 
      </div>*/}
        {/* Add Job Form */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            className="border p-2 rounded w-full"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <button
            onClick={addJob}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Job List */}
        {
          jobs.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded mb-3 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
            >
              <div>
                <p className="font-semibold text-lg">{job.company}</p>
                <p className="text-gray-500">{job.role}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">

                {/* Colored Status Badge */}


                {/* Dropdown */}
                <select
                  value={job.status}
                  onChange={(e) => updateStatus(job._id, e.target.value)}
                  className={`border px-2 py-1 rounded font-semibold ${getStatusStyle(job.status)}`}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button
                  onClick={() => deleteJob(job._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
      </button>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  );
}

export default App;