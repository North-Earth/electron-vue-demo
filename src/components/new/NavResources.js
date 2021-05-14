const CategoryType = "category";
const ItemType = "item";

export default {
    empty: {
        name: "",
        type: CategoryType,
        items: {
            home: {
                id: 0,
                name: "Home",
                icon: "HomeIcon",
                type: ItemType,
            },
        }
    },
    applications: {
        name: "Applications",
        type: CategoryType,
        items: {
            monitor: {
                id: 1,
                name: "Monitor",
                icon: "ChartSquareBarIcon",
                type: ItemType,
            }
        }
    },
    settings: {
        name: "Settings",
        type: CategoryType,
        items: {
            settings: {
                id: 3,
                name: "Settings",
                icon: "AdjustmentsIcon",
                type: ItemType,
            },
            about: {
                id: 4,
                name: "About",
                icon: "InformationCircleIcon",
                type: ItemType,
            }
        }
    },
};