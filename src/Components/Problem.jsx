import React, { useState } from "react";
import "../Styling/Problem.css";

const problemStatements = [
  {
    id: 1001,
    title: "Sustainable Energy Management",
    desc: "Rural areas often face challenges in accessing reliable and sustainable energy sources. There's a need for solutions that promote clean and efficient energy usage. Design a solution to optimize energy consumption in villages by implementing smart grids and renewable energy sources. The system should monitor energy usage, predict demand patterns, and integrate solar/wind energy for sustainable power generation.",
    input:
      "Data on energy consumption patterns, Renewable energy sources like solar, wind, or biomass, Smart grid infrastructure.",
    output:
      "Energy monitoring system for efficient consumption, Implementation of renewable energy sources. Smart grid management for optimized distribution, Energy usage reports, predictions for peak demand, and recommendations for optimizing energy consumption.",
    category: "Smart Cities / Villages",
  },
  {
    id: 1002,
    title: "Waste Management in Villages",
    desc: "Improper waste disposal is a significant issue in many rural areas. Finding sustainable solutions for waste management is crucial. Design a smart waste management system to optimize collection routes, promote recycling, and reduce environmental impact.",
    input:
      "Smart waste bins with monitoring capabilities, Recycling programs and awareness campaigns. Efficient waste disposal and recycling infrastructure.",
    output:
      "Smart waste bins with monitoring capabilities, Recycling programs and awareness campaigns. Efficient waste disposal and recycling infrastructure.",
    category: "Smart Cities / Villages",
  },
  {
    id: 1003,
    title: "Smart Water Management",
    desc: "Create a system to monitor and manage water resources efficiently in rural villages. This should involve real-time monitoring of water sources, leakage detection, and community-level water usage analytics.",
    input:
      "Water quality data, water consumption data, sensor data for leak detection.",
    output:
      "Water quality reports, alerts for leakages, optimized water distribution plans.",
    category: "Smart Cities / Villages",
  },
  {
    id: 1004,
    title: "Traffic Management and Optimization",
    desc: "Develop a solution to alleviate traffic congestion and improve traffic flow in urban areas. The solution should include real-time traffic monitoring, intelligent traffic light control, and dynamic rerouting based on congestion levels.",
    input:
      " Traffic data from sensors, GPS data from vehicles, historical traffic patterns.",
    output:
      "Optimal traffic light timings, real-time traffic updates for navigation apps, reduced congestion reports.",
    category: "Smart Cities / Villages",
  },
  {
    id: 1005,
    title: "Public Safety and Emergency Response",
    desc: "Develop a comprehensive system for enhancing public safety, including predictive crime analytics, emergency response coordination, and citizen communication platforms",
    input: "Crime data, emergency calls, geospatial information. ",
    output:
      "Predictive crime heatmaps, efficient emergency response routes, real-time citizen alerts",
    category: "Smart Cities / Villages",
  },
  {
    id: 2001,
    title: "Patient Engagement and Adherence",
    desc: " Design a solution to improve patient engagement and adherence to treatment plans, medications, and follow-up appointments, especially for chronic conditions.",
    input:
      " Patient health records, treatment plans, and historical adherence data. ",
    output:
      "A mobile application that sends personalized reminders, tracks medication adherence, and provides insights to healthcare providers on patient engagement. ",
    category: "Healthcare",
  },
  {
    id: 2002,
    title: "Remote Monitoring for Chronic Diseases: ",
    desc: "Develop a system for remote monitoring of vital signs and health parameters for patients with chronic diseases, enabling timely intervention and reducing hospital readmissions.",
    input:
      "Vital signs data (e.g., heart rate, blood pressure) from wearable devices.",
    output:
      "A dashboard for healthcare providers displaying real-time patient data, alerting for abnormal readings, and facilitating timely interventions.",
    category: "Healthcare",
  },
  {
    id: 2003,
    title: "Mental Health Support",
    desc: " Create a platform or app that provides accessible and effective mental health support, including real-time counseling, stress management tools, and mood tracking.",
    input:
      "Self-assessment surveys, mood tracking data, and user preferences. ",
    output:
      "A virtual therapy platform offering personalized mental health resources, coping strategies, and connection to professional support when needed",
    category: "Healthcare",
  },
  {
    id: 2004,
    title: "Healthcare Access for Underserved Communities",
    desc: "Propose a solution to enhance healthcare access for underserved communities, considering factors such as transportation, language barriers, and cultural sensitivity.",
    input:
      "Propose a solution to enhance healthcare access for underserved communities, considering factors such as transportation, language barriers, and cultural sensitivity.",
    output:
      "A telemedicine platform customized for underserved areas, with features for virtual consultations, health education, and community health monitoring. ",
    category: "Healthcare",
  },
  {
    id: 2005,
    title: "Data Security in Healthcare Systems",
    desc: " Establish a secure and resilient healthcare IT infrastructure that safeguards patient data and ensures the trust and confidence of both patients and healthcare professionals.",
    input:
      "Existing healthcare IT infrastructure, cybersecurity protocols, and potential vulnerabilities. ",
    output:
      " Enhanced data security measures, encryption protocols, and monitoring systems to safeguard patient information against cyber threats.",
    category: "Healthcare",
  },
  {
    id: 3001,
    title: "Personalized Learning Paths",
    desc: "Develop a platform that analyzes student performance and recommends personalized learning paths.",
    input:
      " Student profiles, Student performance data, preferred learning styles, and historical learning data.  ",
    output:
      "Customized learning recommendations and resources for individual students. ",
    category: "Education Technology",
  },
  {
    id: 3002,
    title: "Virtual Classroom Interaction Enhancer",
    desc: "Create a tool that enhances student-teacher interaction in virtual classrooms. ",
    input:
      "Virtual classroom data, including chat logs, video recordings, and participation metrics",
    output:
      " Insights and suggestions for improving interaction and engagement ",
    category: "Education Technology",
  },
  {
    id: 3003,
    title: "Language Learning Support",
    desc: "Build a system that assists language learners in improving their speaking and pronunciation skills. ",
    input: "Audio recordings of learners speaking in the target language.",
    output:
      " Pronunciation feedback, suggestions for improvement, and progress tracking. ",
    category: "Education Technology",
  },
  {
    id: 3004,
    title: "Interactive Educational Games",
    desc: " Create engaging and educational games for various subjects and age groups.",
    input:
      "Game preferences, subject/topic selection, and user performance data. ",
    output:
      "Game-based learning experiences with progress tracking and adaptive difficulty levels.",
    category: "Education Technology",
  },
  {
    id: 3005,
    title: "Career Guidance Chatbot",
    desc: "Develop an intelligent Career Guidance Chatbot that provides tailored career advice, guidance on skill development, and relevant information about various professions. ",
    input: "Student profiles, interests, and career information.",
    output:
      "An intelligent chatbot that assists students in making informed career choices by providing personalized guidance and resources.",
    category: "Education Technology",
  },
  {
    id: 4001,
    title: "Precision Irrigation Optimization",
    desc: "Design a solution to optimize irrigation practices in agriculture by leveraging sensor data and machine learning models. The aim is to minimize water usage while maximizing crop yield.",
    input:
      " Real-time sensor data (moisture sensors, weather data) from fields. Historical data on crop types, soil conditions, and irrigation practices. Information on local weather patterns. ",
    output:
      "Dynamic irrigation schedule for each field. Recommendations for optimal water usage. Visualization of soil moisture levels and irrigation patterns over time.  ",
    category: "Agriculture",
  },
  {
    id: 4002,
    title: "Crop Disease Identification and Prevention",
    desc: "Create a system that monitors crop health in real-time, identifies potential diseases, and provides early warnings along with preventive measures",
    input:
      "Real-time alerts for potential diseases. Recommended actions to prevent disease outbreaks. Visualization of disease patterns and affected areas.",
    output:
      " Insights and suggestions for improving interaction and engagement ",
    category: "Agriculture",
  },
  {
    id: 4003,
    title: "Sustainable Fertilizer Management Description",
    desc: "Develop a solution to optimize fertilizer application, considering soil nutrient levels, crop requirements, and environmental impact. ",
    input:
      "Soil nutrient data from sensors. Historical fertilizer usage data. Information on crop nutrient requirements.",
    output:
      " Personalized fertilizer application recommendations. Visualization of nutrient levels and fertilizer usage trends. Impact assessment on soil health and environment",
    category: "Agriculture",
  },
  {
    id: 4004,
    title: "Smart Pest Control System",
    desc: " Build a system that detects and controls pest infestations using sensor data, minimizing the reliance on chemical pesticides. ",
    input:
      " Sensor data (imaging devices, pest traps) for pest monitoring. Historical data on pest outbreaks and control measures. Environmental conditions influencing pest behavior. ",
    output:
      "Real-time alerts for pest infestations. Non-chemical pest control recommendations. Visualization of pest population dynamics.",
    category: "Agriculture",
  },
  {
    id: 4005,
    title: "Market-Driven Crop Planning ",
    desc: "Develop a solution that utilizes market data and crop performance to optimize crop planning and maximize profitability for farmers",
    input:
      " Market data including crop prices, demand, and supply. Historical crop yield and market performance data. Weather forecasts influencing crop growth.",
    output:
      "Crop planning recommendations based on market trends. Profitability predictions for different crop choices. Visualization of market-driven crop planning strategies.",
    category: "Agriculture",
  },
];

const Problem = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const openDialog = (problem) => {
    setSelectedProblem(problem);
  };

  const closeDialog = () => {
    setSelectedProblem(null);
  };

  return (
    <div className="problem">
      {/* <div className="marquee">
        <h4>
          <i class="fa-solid fa-bell"></i>&nbsp;&nbsp;PARTICIPATE NOW AND WIN
          AMAZING PRIZE MONEY WORTH 3.5 LAKH + &nbsp;&nbsp;
          <i class="fa-solid fa-bell"></i>
        </h4>
      </div> */}
      <div className="problem_statements">
        {/* <h1>PROBLEM STATEMENTS</h1> */}
        <div className="table-responsive " style={{ borderRadius: "10px" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col" className="col-2">
                  PROBLEM ID
                </th>
                <th scope="col">STATEMENT</th>
                <th scope="col" className="col-4">
                  DOMAIN
                </th>
              </tr>
            </thead>
            <tbody>
              {problemStatements.map((problem, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{problem.id}</td>
                  <td className="statement">
                    <span
                      style={{ cursor: "pointer", color: "darkblue" }}
                      onClick={() => openDialog(problem)}
                    >
                      {problem.title}
                    </span>
                  </td>
                  <td>{problem.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedProblem && (
        <div className="dialog">
          <div className="dialog-content">
            <span className="close" onClick={closeDialog}>
              &times;
            </span>
            <h2>{selectedProblem.title}</h2>
            <p>
              <b>Description-</b>
              {selectedProblem.desc}
              <br />
              <b>Input-</b>
              {selectedProblem.input}
              <br />
              <b>Output-</b>
              {selectedProblem.output}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem;
