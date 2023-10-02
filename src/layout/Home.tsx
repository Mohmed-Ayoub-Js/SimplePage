import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const Home = () => {
    const theme = useTheme();

    const Data = [
        {
            id:1,
            reader:'https://static.suratmp3.com/pics/reciters/thumbs/14_600_600.jpg',
            nameofReader : 'ناصر القطامي',
        },
        {
            id:2,
            reader:'https://m.alarab.qa/get/maximage/20201005_1601911058-748.jpg',
            nameofReader : 'هيثم الدخين',
        },
        {
            id:3,
            reader:'https://ar.assabile.com/media/photo/full_size/maher-al-mueaqly-120.jpg',
            nameofReader : 'ماهر المعيقلي',
        },
        {
            id:3,
            reader:'https://1.bp.blogspot.com/-vaaIVmyWh8g/XhYZ9L-VZqI/AAAAAAAAIZo/8cXTbERimpQoyfpAEB9-soq8xcv667qQgCLcBGAsYHQ/s1600/61138979_2736708026344365_8389497904338829312_n.jpg',
            nameofReader : 'اسلام صبحي',
        },
        {
            id:3,
            reader:'https://i1.sndcdn.com/avatars-000218134676-7sdw5m-t500x500.jpg',
            nameofReader : 'محمد اللحيدان',
        },
        {
            id:3,
            reader:'https://www.almowaten.net/wp-content/uploads/2022/06/%D9%8A%D8%A7%D8%B3%D8%B1-%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A.jpg',
            nameofReader : 'ياسر الدوسري',
        },
        {
            id:3,
            reader:'https://i.pinimg.com/564x/74/9c/dd/749cdd141bfa7444e7d6c5644ce3c62c.jpg',
            nameofReader : 'احمد خضر',
        },
        {
            id:3,
            reader:'https://i1.sndcdn.com/avatars-000198688704-c1dxme-t500x500.jpg',
            nameofReader : 'هزاع البلوشي',
        },  
    ]
  return (
    <div className='mt-[50px] '>
        <div className='grid grid-cols-3 gap-3'>
    {Data.map((item , index) => (
<Card sx={{ display: 'flex' }} className='w-[290px] m-[20px]' key={index}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           <p>{item.nameofReader}</p> 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.reader}
        alt="Live from space album cover"
      />
    </Card>        
    ))}
                    
        </div>

    </div>
  )
}

export default Home