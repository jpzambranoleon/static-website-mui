import { Box, ImageList, ImageListItem } from "@mui/material";

const itemData = [
    {
        img: '/images/app_unsplash.jpg',
        title: 'app'
    },
    {
        img: '/images/slick_laptop.jpg',
        title: 'laptop'
    },
    {
        img: '/images/nerds.jpg',
        title: 'nerds'
    },
]

const MasonryImageList = () => {
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
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