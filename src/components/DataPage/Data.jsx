import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const navigateToNextPage = () => {
    // Replace '/next-page' with the actual path you want to navigate to
    navigate('/');
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts with user ID 1
  const filteredPosts = posts.filter((post) => post.userId === 1);

  // Data for the pie chart
  const data = [
    { name: 'User ID 1', value: filteredPosts.length },
    { name: 'Other Users', value: posts.length - filteredPosts.length },
  ];

  // Colors for the pie chart segments
  const colors = ['#FF6384', '#36A2EB'];

  return (
    <div style={{background:'#b2ebf2', display: 'flex', flexDirection:'column', alignItems:'center', gap:'30px'}}>
      <h2>Post List (User ID 1)</h2>
      <TableContainer style={{ maxHeight: 400, overflow: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow style={{ background: '#f5f5f5',}}>
              <TableCell>UserID</TableCell>
              <TableCell>PostID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.userId}</TableCell>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Recharts Pie Chart */}
      <div style={{ marginTop: '1px', maxWidth: '400px', margin: 'auto'}}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <Button id='back-btn' onClick={navigateToNextPage} variant='contained' color='success'>
        Back To Home Page
      </Button>
    </div>
  );
};

export default PostList;
