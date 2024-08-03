// import React from 'react';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// const EducationTimeline = () => {
//   return (
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="2021 - 2025"
//         iconStyle={{ background: '#AC2B37', color: '#fff' }}
//         icon={<i className="fas fa-graduation-cap"></i>}
//         position="left" // Position left
//       >
//         <h3 className="vertical-timeline-element-title">Worcester Polytechnic Institute</h3>
//         <h4 className="vertical-timeline-element-subtitle">B.S. in Human-Computer Interaction</h4>
//         <p>
//           Description of your studies, achievements, and activities during this period.
//         </p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="2017 - 2021"
//         iconStyle={{ background: '#000080', color: '#fff' }}
//         icon={<i className="fas fa-graduation-cap"></i>}
//         position="right" // Position right
//       >
//         <h3 className="vertical-timeline-element-title2">Fontbonne Academy</h3>
//         <h4 className="vertical-timeline-element-subtitle"></h4>
//         <p>
//           Description of your studies, achievements, and activities during this period.
//         </p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//   );
// };

// export default EducationTimeline;

import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import Logo from './imgs/WPI_logo.svg.png';

const EducationTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: '24px', height: '24px', fontSize: '1.5rem', backgroundColor: '#ffffff' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper sx={{
              padding: '16px',
              borderRadius: '5px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
              width: '200%', // Use 100% width for responsive layout
              display: 'flex',
              alignItems: 'center',
              gap: '16px', // Space between logo and text
              marginRight: 'auto', // Align to the left
            }}>
            <Box
                component="img"
                src={Logo}
                alt="WPI"
                sx={{
                    width: '200px', // Adjust as needed
                    height: 'auto',
                    marginRight: '16px', // Space between logo and text
                }}
            />
            <div>
                <Typography variant="h6" component="h1">
                Worcester Polytechnic Institute
                </Typography>
                <Typography variant="subtitle1" component="h2">
                B.S. in Human-Computer Interaction
                </Typography>
                <Typography variant="p">
                2021 - 2025
                </Typography>
                <Typography>
                Phi Sigma Sigma
                </Typography>
                <Typography>
                Senior Honor Society
                </Typography>
                <Typography>
                Rho Lambda
                </Typography>
                <Typography>
                Order of Omega
                </Typography>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: '24px', height: '24px', fontSize: '1.5rem', backgroundColor: '#ffffff' }} color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper style={{
      padding: '16px',
      borderRadius: '5px', // Rectangle shape, adjust as needed
      backgroundColor: '#ffffff', // Background color of the content box
      boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', // Optional: Add shadow for depth
      width: '300%',
    }}>
            <Typography variant="h6" component="h1">
              Fontbonne Academy
            </Typography>
            <Typography variant="subtitle1" component="h2">
              High School Diploma
            </Typography>
            <Typography>
            National Honor Society
            </Typography>
            <Typography>
            STEM Club
            </Typography>
            <Typography>
            Cooking Club
            </Typography>
            <Typography>
             Spanish National Honor Society
            </Typography>
            <Typography>
             Tennis
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default EducationTimeline;
