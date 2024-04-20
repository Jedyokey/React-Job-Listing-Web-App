// import React from 'react'

// const App = () => {
//     const name = "John";
//     const x = 10;
//     const y = 20;
//     const names = ["John", "Frank", "Sammy", "Mary"];
//     const loggedIn = true;
//     const styles = {
//         color: "purple",
//         fontSize: "45px",
//     }

//   return ( 
//     <>
//         <div classNameName="text-5xl">App2</div>

//         {/* when adding inline styles, use double {{}} */}
//         <p style={{color: "red", fontSize: "24px"}}>Hello! {name}</p>
//         <p style={styles}>What's up {name}</p>

//         <p>The sum of {x} and {y} is {x + y}</p>
//         <ul>
//             {names.map((name, index) => (
//                 <li key={index}>{name}</li>
//             ))}
//         </ul>
//         {/* {loggedIn ? <h1>Hello Member</h1> : " "} */}
//         {loggedIn && <h1>Hello Guys</h1>}
//     </>
//   )
// }

// export default App


import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage' 
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage' 
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => { 
  // Add New Job
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    // console.log('delete', id); 
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',

    });
    return;
  }

  // Update Job
  const updateJob = async (job) => {
    // console.log(newJob);
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(   
      <Route path='/' element={ <MainLayout /> }>
        <Route index element={ <HomePage /> } /> 
        <Route path='/jobs' element={ <JobsPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
        <Route path='/edit-job/:id' element={ <EditJobPage updateJobSubmit={updateJob} /> } loader={jobLoader} />
        <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
        <Route path='/jobs/:id' element={ <JobPage deleteJob={deleteJob} /> } loader={jobLoader} />
      </Route>
  )
  );

  return <RouterProvider router={ router } /> 
  


  // (
  //   <>
  //       <Navbar />
  //       {/* <Hero title="Test title" subtitle="This is the subtitle"/>  */}
  //       <Hero />
  //       <HomeCards />
  //       <JobListings />
  //       <ViewAllJobs /> 


        
  //   </>
  // )
}

export default App
