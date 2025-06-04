import { Menu, Button } from "@chakra-ui/react";

const SortSelector = ()=>{
    return (
        <Menu.Root >
            <Menu.Trigger>
                <Button>Order by: Relevance ▼</Button>
            </Menu.Trigger>
            <Menu.Content>
                <Menu.Item value="Relevance">Relevance</Menu.Item>
                <Menu.Item value="Date_added">Date added</Menu.Item>
                <Menu.Item value="Name">Name</Menu.Item>
                <Menu.Item value="Release_date">Release date</Menu.Item>
                <Menu.Item value="Popularity">Popularity</Menu.Item>
                <Menu.Item value="Average_rating">Average rating</Menu.Item>
            </Menu.Content>
        </Menu.Root>
    );
}

export default SortSelector;