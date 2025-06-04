import { Menu, Button } from "@chakra-ui/react";

interface Props {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: String;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" }, //the values are from the api rawg (from games -> ordering) but the lables are from me
    { value: "name", lable: "Name" }, 
    { value: "-released", lable: "Release date" }, // - symbole means we are reversing it the order 
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button as={"button"}>Order by: {currentSortOrder?.lable || "Relevance"} ▼</Button>
      </Menu.Trigger>
      <Menu.Content>
        {sortOrders.map((order) => (
          <Menu.Item
            key={order.value}
            value={order.value}
            onClick={() => onSelectSort(order.value)}
          >
            {order.lable}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default SortSelector;
