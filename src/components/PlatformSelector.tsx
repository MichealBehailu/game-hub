import { Button, Menu } from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/hooks/useGames";
interface Props {
  OnselectPlatform: (platform: Platform) => void;
  selectedPlatform : Platform | null;
}
const PlatformSelector = ({ OnselectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;   
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button as={"button"}>{selectedPlatform?.name || "Platforms"} ▼</Button>
      </Menu.Trigger>

      <Menu.Content>
        {data.map((platform) => (
          <Menu.Item
            key={platform.id}
            value={platform.name}
            onClick={() => OnselectPlatform(platform)}
          >
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
