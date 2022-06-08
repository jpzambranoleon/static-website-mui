import { Box, ImageList, ImageListItem } from "@mui/material";

const itemData = [
    {
        img: '/images/plans_crop.JPG',
        title: 'plans'
    },
    {
        img: '/images/app_crop.JPG',
        title: 'app'
    },
    {
        img: '/images/develop_crop.JPG',
        title: 'develop'
    },
]

const MasonryImageList = () => {
    return (
        <Box sx={{ width: '100%', height: '100px', display: { xs: 'none', sm: 'block' } }}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default MasonryImageList;