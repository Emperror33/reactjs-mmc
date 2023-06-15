import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl} from "../../Global/config";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const SingleBlog = () => {
  const { id } = useParams();
  const [SingleBlog, setSingleBlog] = React.useState({});
  const getSingleBlog = async () => {
    let res = await axios.get(`${baseUrl}/BG6log/${id}`);
    setSingleBlog(res.data);
  };
  React.useEffect(() => {
    getSingleBlog();
  }, []);
  return (
    <div>
      <Box sx={{ p: 3 }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>
          {SingleBlog.title}
        </Typography>
        <img
          src={SingleBlog.image}
          style={{ height: "400px", width: "100%" }}
        />
        <Typography>{SingleBlog.author}</Typography>
        <Divider />
        <Typography>{SingleBlog.description}</Typography>
      </Box>
    </div>
  );
};

export default SingleBlog;