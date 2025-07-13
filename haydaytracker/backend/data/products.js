const products = [
    {
        "name": "Wheat",
        "level_required": "1",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024"
    },
    {
        "name": "Egg",
        "level_required": "1",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420"
    },
    {
        "name": "Corn",
        "level_required": "2",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631"
    },
    {
        "name": "Bread",
        "level_required": "2",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e1/Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073518"
    },
    {
        "name": "Chicken feed",
        "level_required": "3",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950"
    },
    {
        "name": "Soybean",
        "level_required": "5",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547"
    },
    {
        "name": "Cow feed",
        "level_required": "6",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956"
    },
    {
        "name": "Milk",
        "level_required": "6",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427"
    },
    {
        "name": "Cream",
        "level_required": "6",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/83/Cream.png/revision/latest/scale-to-width-down/100?cb=20240205163032"
    },
    {
        "name": "Sugarcane",
        "level_required": "7",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727"
    },
    {
        "name": "Corn bread",
        "level_required": "7",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836"
    },
    {
        "name": "Brown sugar",
        "level_required": "7",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/02/Brown_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163705"
    },
    {
        "name": "Popcorn",
        "level_required": "8",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/85/Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170036"
    },
    {
        "name": "Carrot",
        "level_required": "9",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c3/Carrot.png/revision/latest/scale-to-width-down/100?cb=20240218151353"
    },
    {
        "name": "Butter",
        "level_required": "9",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Butter.png/revision/latest/scale-to-width-down/100?cb=20240205163128"
    },
    {
        "name": "Pancake",
        "level_required": "9",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/62/Pancake.png/revision/latest/scale-to-width-down/100?cb=20240205164109"
    },
    {
        "name": "Pig feed",
        "level_required": "10",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e4/Pig_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161939"
    },
    {
        "name": "Bacon",
        "level_required": "10",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f6/Bacon.png/revision/latest/scale-to-width-down/100?cb=20191025193433"
    },
    {
        "name": "Cookie",
        "level_required": "10",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/70/Cookie.png/revision/latest/scale-to-width-down/100?cb=20240205074046"
    },
    {
        "name": "Bacon and eggs",
        "level_required": "11",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a6/Bacon_and_Eggs.png/revision/latest/scale-to-width-down/100?cb=20240205164211"
    },
    {
        "name": "Cheese",
        "level_required": "12",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a5/Cheese.png/revision/latest/scale-to-width-down/100?cb=20240205163241"
    },
    {
        "name": "Indigo",
        "level_required": "13",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/48/Indigo.png/revision/latest/scale-to-width-down/100?cb=20191023151432"
    },
    {
        "name": "White sugar",
        "level_required": "13",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/ff/White_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163815"
    },
    {
        "name": "Carrot pie",
        "level_required": "14",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/0b/Carrot_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207083902"
    },
    {
        "name": "Pumpkin",
        "level_required": "15",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/64/Pumpkin.png/revision/latest/scale-to-width-down/100?cb=20240219030742"
    },
    {
        "name": "Pumpkin pie",
        "level_required": "15",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7d/Pumpkin_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150900"
    },
    {
        "name": "Apple",
        "level_required": "15",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7d/Apple.png/revision/latest/scale-to-width-down/100?cb=20240219032402"
    },
    {
        "name": "Sheep feed",
        "level_required": "16",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/58/Sheep_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712162003"
    },
    {
        "name": "Wool",
        "level_required": "16",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/34/Wool.png/revision/latest/scale-to-width-down/100?cb=20191025193439"
    },
    {
        "name": "Buttered popcorn",
        "level_required": "16",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/88/Buttered_Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170136"
    },
    {
        "name": "Sweater",
        "level_required": "17",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/73/Sweater.png/revision/latest/scale-to-width-down/100?cb=20240207155705"
    },
    {
        "name": "Cotton",
        "level_required": "18",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c3/Cotton.png/revision/latest/scale-to-width-down/100?cb=20240218151721"
    },
    {
        "name": "Bacon pie",
        "level_required": "18",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b4/Bacon_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207145633"
    },
    {
        "name": "Syrup",
        "level_required": "18",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2f/Syrup.png/revision/latest/scale-to-width-down/100?cb=20240205163903"
    },
    {
        "name": "Cotton fabric",
        "level_required": "18",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/01/Cotton_Fabric.png/revision/latest/scale-to-width-down/100?cb=20240207155935"
    },
    {
        "name": "Hamburger",
        "level_required": "18",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a4/Hamburger.png/revision/latest/scale-to-width-down/100?cb=20191023233032"
    },
    {
        "name": "Raspberry",
        "level_required": "19",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1f/Raspberry.png/revision/latest/scale-to-width-down/100?cb=20240219032258"
    },
    {
        "name": "Raspberry muffin",
        "level_required": "19",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/22/Raspberry_Muffin.png/revision/latest/scale-to-width-down/100?cb=20240205074215"
    },
    {
        "name": "Blue woolly hat",
        "level_required": "19",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/03/Blue_Woolly_Hat.png/revision/latest/scale-to-width-down/100?cb=20240207155851"
    },
    {
        "name": "Cotton shirt",
        "level_required": "19",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/66/Cotton_Shirt.png/revision/latest/scale-to-width-down/100?cb=20150711231709"
    },
    {
        "name": "Blue sweater",
        "level_required": "20",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/37/Blue_Sweater.png/revision/latest/scale-to-width-down/100?cb=20240207155757"
    },
    {
        "name": "Carrot cake",
        "level_required": "21",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/dd/Carrot_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223073206"
    },
    {
        "name": "Wooly chaps",
        "level_required": "21",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/22/Wooly_Chaps.png/revision/latest/scale-to-width-down/100?cb=20150711231659"
    },
    {
        "name": "Cherry",
        "level_required": "22",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/20/Cherry.png/revision/latest/scale-to-width-down/100?cb=20191023150203"
    },
    {
        "name": "Cream cake",
        "level_required": "23",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/73/Cream_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223073301"
    },
    {
        "name": "Red berry cake",
        "level_required": "23",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/69/Red_Berry_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223073738"
    },
    {
        "name": "Cheesecake",
        "level_required": "24",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2d/Cheesecake.png/revision/latest/scale-to-width-down/100?cb=20240223073836"
    },
    {
        "name": "Silver ore",
        "level_required": "24",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/97/Silver_Ore.png/revision/latest/scale-to-width-down/100?cb=20150711233621"
    },
    {
        "name": "Gold ore",
        "level_required": "24",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f7/Gold_Ore.png/revision/latest/scale-to-width-down/100?cb=20150711233638"
    },
    {
        "name": "Platinum ore",
        "level_required": "24",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b0/Platinum_Ore.png/revision/latest/scale-to-width-down/100?cb=20150711233615"
    },
    {
        "name": "Silver bar",
        "level_required": "24",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/94/Silver_Bar.png/revision/latest/scale-to-width-down/100?cb=20240208090436"
    },
    {
        "name": "Chili pepper",
        "level_required": "25",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ab/Chili_Pepper.png/revision/latest/scale-to-width-down/100?cb=20191023151351"
    },
    {
        "name": "Chili popcorn",
        "level_required": "25",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7c/Chili_Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170227"
    },
    {
        "name": "Gold bar",
        "level_required": "25",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4e/Gold_Bar.png/revision/latest/scale-to-width-down/100?cb=20240208090745"
    },
    {
        "name": "Platinum bar",
        "level_required": "25",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d2/Platinum_Bar.png/revision/latest/scale-to-width-down/100?cb=20240208090844"
    },
    {
        "name": "Violet dress",
        "level_required": "25",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/33/Violet_Dress.png/revision/latest/scale-to-width-down/100?cb=20240411152554"
    },
    {
        "name": "Blackberry",
        "level_required": "26",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/25/Blackberry.png/revision/latest/scale-to-width-down/100?cb=20240219032632"
    },
    {
        "name": "Blackberry muffin",
        "level_required": "26",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c9/Blackberry_Muffin.png/revision/latest/scale-to-width-down/100?cb=20240205074434"
    },
    {
        "name": "Carrot juice",
        "level_required": "26",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e0/Carrot_Juice.png/revision/latest/scale-to-width-down/100?cb=20150711232322"
    },
    {
        "name": "Red lure",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/96/Red_Lure.png/revision/latest?cb=20140330225706"
    },
    {
        "name": "Green lure",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c4/Green_Lure.png/revision/latest?cb=20140330225800"
    },
    {
        "name": "Blue lure",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/12/Blue_Lure.png/revision/latest?cb=20140330225859"
    },
    {
        "name": "Purple lure",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/17/Purple_Lure.png/revision/latest?cb=20140330225936"
    },
    {
        "name": "Gold lure",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a8/Gold_Lure.png/revision/latest?cb=20140330230009"
    },
    {
        "name": "Fish fillet",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/63/Fish_Fillet.png/revision/latest/scale-to-width-down/100?cb=20150414211348"
    },
    {
        "name": "Fish burger",
        "level_required": "27",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7e/Fish_Burger.png/revision/latest/scale-to-width-down/100?cb=20240205164539"
    },
    {
        "name": "Apple pie",
        "level_required": "28",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fb/Apple_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207083954"
    },
    {
        "name": "Fish pie",
        "level_required": "28",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ec/Fish_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150258"
    },
    {
        "name": "Apple juice",
        "level_required": "28",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/41/Apple_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223064501"
    },
    {
        "name": "Vanilla ice cream",
        "level_required": "29",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/15/Vanilla_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411152616"
    },
    {
        "name": "Tomato",
        "level_required": "30",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9d/Tomato.png/revision/latest/scale-to-width-down/100?cb=20240219025108"
    },
    {
        "name": "Roasted tomatoes",
        "level_required": "30",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/04/Roasted_Tomatoes.png/revision/latest/scale-to-width-down/100?cb=20191023233109"
    },
    {
        "name": "Cherry juice",
        "level_required": "30",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ab/Cherry_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223064636"
    },
    {
        "name": "Fishing net",
        "level_required": "30",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a1/Fishing_Net.png/revision/latest/scale-to-width-down/100?cb=20150725033019"
    },
    {
        "name": "Mystery net",
        "level_required": "30",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/17/Mystery_Net.png/revision/latest/scale-to-width-down/100?cb=20150725033113"
    },
    {
        "name": "Tomato juice",
        "level_required": "31",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a5/Tomato_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223064831"
    },
    {
        "name": "Berry juice",
        "level_required": "31",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3a/Berry_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223063542"
    },
    {
        "name": "Goat feed",
        "level_required": "32",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ed/Goat_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161945"
    },
    {
        "name": "Goat milk",
        "level_required": "32",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/45/Goat_Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193509"
    },
    {
        "name": "Goat cheese",
        "level_required": "33",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c8/Goat_Cheese.png/revision/latest/scale-to-width-down/100?cb=20240205163401"
    },
    {
        "name": "Pizza",
        "level_required": "33",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f4/Pizza.png/revision/latest/scale-to-width-down/100?cb=20240205074711"
    },
    {
        "name": "Coal",
        "level_required": "33",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a7/Coal.png/revision/latest/scale-to-width-down/100?cb=20150711233731"
    },
    {
        "name": "Refined coal",
        "level_required": "33",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b5/Refined_Coal.png/revision/latest/scale-to-width-down/100?cb=20240208090929"
    },
    {
        "name": "Cherry popsicle",
        "level_required": "33",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/48/Cherry_Popsicle.png/revision/latest/scale-to-width-down/100?cb=20240411152842"
    },
    {
        "name": "Strawberry",
        "level_required": "34",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6d/Strawberry.png/revision/latest/scale-to-width-down/100?cb=20240219031821"
    },
    {
        "name": "Feta pie",
        "level_required": "34",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/61/Feta_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150211"
    },
    {
        "name": "Iron ore",
        "level_required": "34",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/87/Iron_Ore.png/revision/latest/scale-to-width-down/100?cb=20150711233632"
    },
    {
        "name": "Iron bar",
        "level_required": "34",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6c/Iron_Bar.png/revision/latest/scale-to-width-down/100?cb=20240208090640"
    },
    {
        "name": "Strawberry ice cream",
        "level_required": "34",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8d/Strawberry_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411152635"
    },
    {
        "name": "Wheat bundle",
        "level_required": "34 (Rep. 3)",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5d/Wheat_Bundle.png/revision/latest/scale-to-width-down/100?cb=20170707203212"
    },
    {
        "name": "Meat bucket",
        "level_required": "34 (Rep. 3)",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5e/Meat_Bucket.png/revision/latest/scale-to-width-down/100?cb=20240411151118"
    },
    {
        "name": "Potato",
        "level_required": "35",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c2/Potato.png/revision/latest/scale-to-width-down/100?cb=20240219030654"
    },
    {
        "name": "Strawberry cake",
        "level_required": "35",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1a/Strawberry_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223073929"
    },
    {
        "name": "Baked potato",
        "level_required": "35",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/11/Baked_Potato.png/revision/latest/scale-to-width-down/100?cb=20240205164314"
    },
    {
        "name": "Apple jam",
        "level_required": "35",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6c/Apple_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208151258"
    },
    {
        "name": "Chocolate cake",
        "level_required": "36",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/87/Chocolate_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074025"
    },
    {
        "name": "Casserole",
        "level_required": "36",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b6/Casserole.png/revision/latest/scale-to-width-down/100?cb=20240207145740"
    },
    {
        "name": "Cacao",
        "level_required": "36",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/60/Cacao.png/revision/latest/scale-to-width-down/100?cb=20240219032732"
    },
    {
        "name": "Raspberry jam",
        "level_required": "36",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/84/Raspberry_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208151524"
    },
    {
        "name": "Spicy pizza",
        "level_required": "37",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5c/Spicy_Pizza.png/revision/latest/scale-to-width-down/100?cb=20240205083244"
    },
    {
        "name": "Blackberry jam",
        "level_required": "37",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/52/Blackberry_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208151625"
    },
    {
        "name": "Potato feta cake",
        "level_required": "38",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7c/Potato_Feta_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074133"
    },
    {
        "name": "Cherry jam",
        "level_required": "38",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/53/Cherry_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208151724"
    },
    {
        "name": "Bracelet",
        "level_required": "38",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/33/Bracelet.png/revision/latest/scale-to-width-down/100?cb=20240208162033"
    },
    {
        "name": "Potato bread",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/26/Potato_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205083506"
    },
    {
        "name": "Shepherd's pie",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b8/Shepherd%27s_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150949"
    },
    {
        "name": "Chocolate ice cream",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/41/Chocolate_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411152825"
    },
    {
        "name": "Honeycomb",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7c/Honeycomb.png/revision/latest/scale-to-width-down/100?cb=20191025193524"
    },
    {
        "name": "Necklace",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3a/Necklace.png/revision/latest/scale-to-width-down/100?cb=20240208162414"
    },
    {
        "name": "Honey",
        "level_required": "39",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c6/Honey.png/revision/latest/scale-to-width-down/100?cb=20240209012557"
    },
    {
        "name": "Honey popcorn",
        "level_required": "40",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b1/Honey_Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170401"
    },
    {
        "name": "Diamond ring",
        "level_required": "40",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a6/Diamond_Ring.png/revision/latest/scale-to-width-down/100?cb=20240208162131"
    },
    {
        "name": "Fish and chips",
        "level_required": "41",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ea/Fish_and_Chips.png/revision/latest/scale-to-width-down/100?cb=20191023233220"
    },
    {
        "name": "Iron bracelet",
        "level_required": "41",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/40/Iron_Bracelet.png/revision/latest/scale-to-width-down/100?cb=20240208162523"
    },
    {
        "name": "Coffee bean",
        "level_required": "42",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/33/Coffee_Bean.png/revision/latest/scale-to-width-down/100?cb=20240219032959"
    },
    {
        "name": "Espresso",
        "level_required": "42",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ad/Espresso.png/revision/latest/scale-to-width-down/100?cb=20240209012756"
    },
    {
        "name": "Honey apple cake",
        "level_required": "42",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/16/Honey_Apple_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074318"
    },
    {
        "name": "Caffè latte",
        "level_required": "43",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6e/Caff%C3%A8_Latte.png/revision/latest/scale-to-width-down/100?cb=20240209012944"
    },
    {
        "name": "Chocolate popcorn",
        "level_required": "44",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/09/Chocolate_Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170316"
    },
    {
        "name": "Lobster trap",
        "level_required": "44",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/38/Lobster_Trap.png/revision/latest/scale-to-width-down/100?cb=20150725035512"
    },
    {
        "name": "Lobster tail",
        "level_required": "44",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5d/Lobster_Tail.png/revision/latest/scale-to-width-down/100?cb=20150411101115"
    },
    {
        "name": "Frutti di Mare pizza",
        "level_required": "45",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5f/Frutti_di_Mare_Pizza.png/revision/latest/scale-to-width-down/100?cb=20240205083710"
    },
    {
        "name": "Caffè mocha",
        "level_required": "45",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c7/Caff%C3%A8_Mocha.png/revision/latest/scale-to-width-down/100?cb=20240209012852"
    },
    {
        "name": "Chamomile",
        "level_required": "45",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/31/Chamomile.png/revision/latest/scale-to-width-down/100?cb=20241209180843"
    },
    {
        "name": "Soothing Pad",
        "level_required": "45",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c0/Soothing_Pad.png/revision/latest/scale-to-width-down/100?cb=20241209182716"
    },
    {
        "name": "Raspberry mocha",
        "level_required": "46",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5c/Raspberry_Mocha.png/revision/latest/scale-to-width-down/100?cb=20180223180014"
    },
    {
        "name": "Lobster soup",
        "level_required": "46",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/59/Lobster_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209021219"
    },
    {
        "name": "Hot chocolate",
        "level_required": "47",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b0/Hot_Chocolate.png/revision/latest/scale-to-width-down/100?cb=20240209013139"
    },
    {
        "name": "Tomato soup",
        "level_required": "47",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/dc/Tomato_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209023225"
    },
    {
        "name": "Red scarf",
        "level_required": "48",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4f/Red_Scarf.png/revision/latest/scale-to-width-down/100?cb=20240207160030"
    },
    {
        "name": "Lobster skewer",
        "level_required": "48",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/62/Lobster_Skewer.png/revision/latest/scale-to-width-down/100?cb=20240223075812"
    },
    {
        "name": "Beeswax",
        "level_required": "48",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e4/Beeswax.png/revision/latest/scale-to-width-down/100?cb=20240209012642"
    },
    {
        "name": "Strawberry candle",
        "level_required": "48",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/21/Strawberry_Candle.png/revision/latest/scale-to-width-down/100?cb=20240209023413"
    },
    {
        "name": "Rustic bouquet",
        "level_required": "49",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/93/Rustic_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240209042055"
    },
    {
        "name": "Pumpkin soup",
        "level_required": "49",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/59/Pumpkin_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209023128"
    },
    {
        "name": "Asparagus",
        "level_required": "49",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/100?cb=20240218150229"
    },
    {
        "name": "Asparagus quiche",
        "level_required": "49",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4b/Asparagus_Quiche.png/revision/latest/scale-to-width-down/100?cb=20240207145524"
    },
    {
        "name": "Strawberry jam",
        "level_required": "50",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/40/Strawberry_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208152746"
    },
    {
        "name": "Duck trap",
        "level_required": "50",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a7/Duck_Trap.png/revision/latest/scale-to-width-down/100?cb=20150725035639"
    },
    {
        "name": "Duck feather",
        "level_required": "50",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f9/Duck_Feather.png/revision/latest/scale-to-width-down/100?cb=20150414212143"
    },
    {
        "name": "Sesame",
        "level_required": "50",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/07/Sesame.png/revision/latest/scale-to-width-down/100?cb=20240219030944"
    },
    {
        "name": "Sesame ice cream",
        "level_required": "50",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/77/Sesame_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240208110210"
    },
    {
        "name": "Caramel apple",
        "level_required": "51",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/24/Caramel_Apple.png/revision/latest/scale-to-width-down/100?cb=20240210053517"
    },
    {
        "name": "Pillow",
        "level_required": "51",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/36/Pillow.png/revision/latest/scale-to-width-down/100?cb=20240411151249"
    },
    {
        "name": "Asparagus soup",
        "level_required": "51",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/83/Asparagus_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209021345"
    },
    {
        "name": "Toffee",
        "level_required": "52",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/29/Toffee.png/revision/latest/scale-to-width-down/100?cb=20240210054552"
    },
    {
        "name": "Raspberry candle",
        "level_required": "52",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6c/Raspberry_Candle.png/revision/latest/scale-to-width-down/100?cb=20180211175650"
    },
    {
        "name": "Pineapple",
        "level_required": "52",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fb/Pineapple.png/revision/latest/scale-to-width-down/100?cb=20240219030555"
    },
    {
        "name": "Pineapple juice",
        "level_required": "52",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fd/Pineapple_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223064929"
    },
    {
        "name": "Fish soup",
        "level_required": "53",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/be/Fish_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209022047"
    },
    {
        "name": "Lily",
        "level_required": "53",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/0a/Lily.png/revision/latest/scale-to-width-down/100?cb=20240219025449"
    },
    {
        "name": "Soy sauce",
        "level_required": "54",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/97/Soy_Sauce.png/revision/latest/scale-to-width-down/100?cb=20240210055302"
    },
    {
        "name": "Chocolate",
        "level_required": "54",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/df/Chocolate.png/revision/latest/scale-to-width-down/100?cb=20240210053728"
    },
    {
        "name": "Fancy cake",
        "level_required": "54",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/dd/Fancy_Cake.png/revision/latest/scale-to-width-down/100?cb=20240411150410"
    },
    {
        "name": "Rice",
        "level_required": "56",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/da/Rice.png/revision/latest/scale-to-width-down/100?cb=20240219030840"
    },
    {
        "name": "Sushi roll",
        "level_required": "56",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cf/Sushi_Roll.png/revision/latest/scale-to-width-down/100?cb=20240210101804"
    },
    {
        "name": "Olive",
        "level_required": "57",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5f/Olive.png/revision/latest/scale-to-width-down/100?cb=20240219033435"
    },
    {
        "name": "Lollipop",
        "level_required": "57",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/58/Lollipop.png/revision/latest/scale-to-width-down/100?cb=20240210054240"
    },
    {
        "name": "Lettuce",
        "level_required": "58",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/da/Lettuce.png/revision/latest/scale-to-width-down/100?cb=20240219025301"
    },
    {
        "name": "Feta salad",
        "level_required": "58",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/96/Feta_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211074202"
    },
    {
        "name": "Lobster sushi",
        "level_required": "59",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7b/Lobster_Sushi.png/revision/latest/scale-to-width-down/100?cb=20240210102040"
    },
    {
        "name": "Blanket",
        "level_required": "59",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3b/Blanket.png/revision/latest/scale-to-width-down/100?cb=20240411145624"
    },
    {
        "name": "Jelly beans",
        "level_required": "60",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ed/Jelly_Beans.png/revision/latest/scale-to-width-down/100?cb=20240210054020"
    },
    {
        "name": "Olive oil",
        "level_required": "60",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/34/Olive_Oil.png/revision/latest/scale-to-width-down/100?cb=20240210055734"
    },
    {
        "name": "Garlic",
        "level_required": "60",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cc/Garlic.png/revision/latest/scale-to-width-down/100?cb=20240218151955"
    },
    {
        "name": "Garlic bread",
        "level_required": "60",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7f/Garlic_Bread.png/revision/latest/scale-to-width-down/100?cb=20240411150635"
    },
    {
        "name": "Veggie bagel",
        "level_required": "61",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/14/Veggie_Bagel.png/revision/latest/scale-to-width-down/100?cb=20240211131010"
    },
    {
        "name": "Mayonnaise",
        "level_required": "62",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4e/Mayonnaise.png/revision/latest/scale-to-width-down/100?cb=20240210055543"
    },
    {
        "name": "BLT salad",
        "level_required": "62",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/eb/BLT_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211074418"
    },
    {
        "name": "Caramel latte",
        "level_required": "62",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6a/Caramel_Latte.png/revision/latest/scale-to-width-down/100?cb=20240209013040"
    },
    {
        "name": "Peanuts",
        "level_required": "62",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9b/Peanuts.png/revision/latest/scale-to-width-down/100?cb=20200707051034"
    },
    {
        "name": "Sunflower",
        "level_required": "63",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/81/Sunflower.png/revision/latest/scale-to-width-down/100?cb=20240219031925"
    },
    {
        "name": "Egg sushi",
        "level_required": "63",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9b/Egg_Sushi.png/revision/latest/scale-to-width-down/100?cb=20240210101954"
    },
    {
        "name": "Honey peanuts",
        "level_required": "63",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ad/Honey_Peanuts.png/revision/latest/scale-to-width-down/100?cb=20240411150946"
    },
    {
        "name": "Seafood salad",
        "level_required": "64",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/69/Seafood_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211102556"
    },
    {
        "name": "Berry smoothie",
        "level_required": "64",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a8/Berry_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171218"
    },
    {
        "name": "Snack mix",
        "level_required": "64",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a3/Snack_Mix.png/revision/latest/scale-to-width-down/100?cb=20240411151336"
    },
    {
        "name": "Bright bouquet",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/52/Bright_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240411145809"
    },
    {
        "name": "Bacon toast",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/72/Bacon_Toast.png/revision/latest/scale-to-width-down/100?cb=20150711224147"
    },
    {
        "name": "Pineapple cake",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e1/Pineapple_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074541"
    },
    {
        "name": "Chocolate pie",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7c/Chocolate_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207145850"
    },
    {
        "name": "Cabbage",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cc/Cabbage.png/revision/latest/scale-to-width-down/100?cb=20240218151308"
    },
    {
        "name": "Cabbage soup",
        "level_required": "65",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/34/Cabbage_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209021929"
    },
    {
        "name": "Lemon",
        "level_required": "66",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/35/Lemon.png/revision/latest/scale-to-width-down/100?cb=20240219033200"
    },
    {
        "name": "Lemon curd",
        "level_required": "66",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ea/Lemon_Curd.png/revision/latest/scale-to-width-down/100?cb=20240210055448"
    },
    {
        "name": "Olive dip",
        "level_required": "66",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/32/Olive_Dip.png/revision/latest/scale-to-width-down/100?cb=20240411151145"
    },
    {
        "name": "Egg sandwich",
        "level_required": "66",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/81/Egg_Sandwich.png/revision/latest/scale-to-width-down/100?cb=20240211165444"
    },
    {
        "name": "Green smoothie",
        "level_required": "66",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f6/Green_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171507"
    },
    {
        "name": "Fresh pasta",
        "level_required": "67",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/93/Fresh_Pasta.png/revision/latest/scale-to-width-down/100?cb=20240211172634"
    },
    {
        "name": "Pasta salad",
        "level_required": "67",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/18/Pasta_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211105704"
    },
    {
        "name": "Lemon pie",
        "level_required": "67",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/85/Lemon_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150447"
    },
    {
        "name": "Grilled asparagus",
        "level_required": "67",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cf/Grilled_Asparagus.png/revision/latest/scale-to-width-down/100?cb=20240223080059"
    },
    {
        "name": "Onion",
        "level_required": "68",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/51/Onion.png/revision/latest/scale-to-width-down/100?cb=20240219025803"
    },
    {
        "name": "Grilled onion",
        "level_required": "68",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/70/Grilled_Onion.png/revision/latest/scale-to-width-down/100?cb=20191023233225"
    },
    {
        "name": "Lemon cake",
        "level_required": "68",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6c/Lemon_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074632"
    },
    {
        "name": "Lemon essential oil",
        "level_required": "68",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9a/Lemon_Essential_Oil.png/revision/latest/scale-to-width-down/135?cb=20240428095756"
    },
    {
        "name": "Peanut butter milkshake",
        "level_required": "68",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b7/Peanut_Butter_Milkshake.png/revision/latest/scale-to-width-down/75?cb=20240303131045"
    },
    {
        "name": "Tomato sauce",
        "level_required": "69",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/09/Tomato_Sauce.png/revision/latest/scale-to-width-down/100?cb=20240210060131"
    },
    {
        "name": "Honey toast",
        "level_required": "69",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6d/Honey_Toast.png/revision/latest/scale-to-width-down/100?cb=20240211164950"
    },
    {
        "name": "Fried rice",
        "level_required": "69",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/61/Fried_Rice.png/revision/latest/scale-to-width-down/100?cb=20240411150556"
    },
    {
        "name": "Yogurt smoothie",
        "level_required": "70",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d2/Yogurt_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171944"
    },
    {
        "name": "Cloche hat",
        "level_required": "70",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1e/Cloche_Hat.png/revision/latest/scale-to-width-down/100?cb=20180223175734"
    },
    {
        "name": "Cucumber",
        "level_required": "70",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/59/Cucumber.png/revision/latest/scale-to-width-down/100?cb=20240218151809"
    },
    {
        "name": "Cucumber smoothie",
        "level_required": "70",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/57/Cucumber_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20190129164559"
    },
    {
        "name": "Orange",
        "level_required": "71",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/43/Orange.png/revision/latest/scale-to-width-down/100?cb=20240219033522"
    },
    {
        "name": "Flower shawl",
        "level_required": "71",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/66/Flower_Shawl.png/revision/latest/scale-to-width-down/100?cb=20240207160117"
    },
    {
        "name": "Orange juice",
        "level_required": "71",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7e/Orange_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223065838"
    },
    {
        "name": "Peanut butter and jelly sandwich",
        "level_required": "71",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/69/Peanut_Butter_and_Jelly_Sandwich.png/revision/latest/scale-to-width-down/100?cb=20240411151207"
    },
    {
        "name": "Onion soup",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/05/Onion_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209022621"
    },
    {
        "name": "Lemon candle",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8a/Lemon_Candle.png/revision/latest/scale-to-width-down/100?cb=20240209023630"
    },
    {
        "name": "Top hat",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8d/Top_Hat.png/revision/latest/scale-to-width-down/100?cb=20240211173933"
    },
    {
        "name": "Gnocchi",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/81/Gnocchi.png/revision/latest/scale-to-width-down/100?cb=20240211175230"
    },
    {
        "name": "Beetroot",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/56/Beetroot.png/revision/latest/scale-to-width-down/100?cb=20240218150336"
    },
    {
        "name": "Winter veggies",
        "level_required": "72",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/08/Winter_Veggies.png/revision/latest/scale-to-width-down/100?cb=20240411151607"
    },
    {
        "name": "Rice noodles",
        "level_required": "73",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/20/Rice_Noodles.png/revision/latest/scale-to-width-down/100?cb=20240211172740"
    },
    {
        "name": "Noodle soup",
        "level_required": "73",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/86/Noodle_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209022516"
    },
    {
        "name": "Gracious bouquet",
        "level_required": "73",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/82/Gracious_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240411150713"
    },
    {
        "name": "Bell pepper",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e2/Bell_Pepper.png/revision/latest/scale-to-width-down/100?cb=20240218150145"
    },
    {
        "name": "Marmalade",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/ed/Marmalade.png/revision/latest/scale-to-width-down/100?cb=20240208152141"
    },
    {
        "name": "Sun hat",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4c/Sun_Hat.png/revision/latest/scale-to-width-down/100?cb=20240211173826"
    },
    {
        "name": "Veggie lasagna",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d1/Veggie_Lasagna.png/revision/latest/scale-to-width-down/100?cb=20240211180053"
    },
    {
        "name": "Veggie platter",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7d/Veggie_Platter.png/revision/latest/scale-to-width-down/100?cb=20240211105316"
    },
    {
        "name": "Chamomile Essential Oil",
        "level_required": "74",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/53/Chamomile_Essential_Oil.png/revision/latest/scale-to-width-down/100?cb=20241209181229"
    },
    {
        "name": "Hot dog",
        "level_required": "75",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/82/Hot_Dog.png/revision/latest/scale-to-width-down/100?cb=20240211180755"
    },
    {
        "name": "Coleslaw",
        "level_required": "75",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e1/Coleslaw.png/revision/latest/scale-to-width-down/100?cb=20240411150158"
    },
    {
        "name": "Cotton Candy",
        "level_required": "75",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/67/Cotton_Candy.png/revision/latest/scale-to-width-down/100?cb=20240210053918"
    },
    {
        "name": "Peach",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e2/Peach.png/revision/latest/scale-to-width-down/100?cb=20240219033622"
    },
    {
        "name": "Peach tart",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/07/Peach_Tart.png/revision/latest/scale-to-width-down/100?cb=20240207150814"
    },
    {
        "name": "Tofu dog",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fa/Tofu_Dog.png/revision/latest/scale-to-width-down/100?cb=20180222234446"
    },
    {
        "name": "Big sushi roll",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a9/Big_Sushi_Roll.png/revision/latest/scale-to-width-down/100?cb=20240210101848"
    },
    {
        "name": "Beetroot salad",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/ff/Beetroot_Salad.png/revision/latest/scale-to-width-down/100?cb=20240411145459"
    },
    {
        "name": "Plain Donut",
        "level_required": "76",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/08/Plain_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212101437"
    },
    {
        "name": "Salsa",
        "level_required": "77",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1e/Salsa.png/revision/latest/scale-to-width-down/100?cb=20240210055852"
    },
    {
        "name": "Taco",
        "level_required": "77",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4d/Taco.png/revision/latest/scale-to-width-down/100?cb=20240212102658"
    },
    {
        "name": "Colourful omelet",
        "level_required": "77",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/65/Colourful_Omelet.png/revision/latest/scale-to-width-down/100?cb=20240212104001"
    },
    {
        "name": "Spring omelet",
        "level_required": "77",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f2/Spring_Omelet.png/revision/latest/scale-to-width-down/100?cb=20240212104155"
    },
    {
        "name": "Summer rolls",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/74/Summer_Rolls.png/revision/latest/scale-to-width-down/100?cb=20240211110030"
    },
    {
        "name": "Orange sorbet",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/11/Orange_Sorbet.png/revision/latest/scale-to-width-down/100?cb=20240411152737"
    },
    {
        "name": "Corn dog",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/15/Corn_Dog.png/revision/latest/scale-to-width-down/100?cb=20240211180913"
    },
    {
        "name": "Potato soup",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ab/Potato_Soup.png/revision/latest/scale-to-width-down/100?cb=20240303134341"
    },
    {
        "name": "Ginger",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/85/Ginger.png/revision/latest/scale-to-width-down/100?cb=20240218152109"
    },
    {
        "name": "Sesame brittle",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/65/Sesame_Brittle.png/revision/latest/scale-to-width-down/100?cb=20240210054437"
    },
    {
        "name": "Affogato",
        "level_required": "78",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fc/Affogato.png/revision/latest/scale-to-width-down/100?cb=20240208103914"
    },
    {
        "name": "Fish taco",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d5/Fish_Taco.png/revision/latest/scale-to-width-down/100?cb=20240212102746"
    },
    {
        "name": "Peach jam",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/be/Peach_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208152501"
    },
    {
        "name": "Lobster pasta",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5a/Lobster_Pasta.png/revision/latest/scale-to-width-down/100?cb=20240211175632"
    },
    {
        "name": "Cucumber sandwich",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b4/Cucumber_Sandwich.png/revision/latest/scale-to-width-down/100?cb=20240211170159"
    },
    {
        "name": "Spicy fish",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/71/Spicy_Fish.png/revision/latest/scale-to-width-down/100?cb=20240411151355"
    },
    {
        "name": "Sprinkled Donut",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/40/Sprinkled_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212101844"
    },
    {
        "name": "Cheese omelet",
        "level_required": "79",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c2/Cheese_Omelet.png/revision/latest/scale-to-width-down/100?cb=20240212103833"
    },
    {
        "name": "Tea leaf",
        "level_required": "80",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e3/Tea_Leaf.png/revision/latest/scale-to-width-down/100?cb=20240219032147"
    },
    {
        "name": "Green tea",
        "level_required": "80",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Green_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212110927"
    },
    {
        "name": "Onion dog",
        "level_required": "80",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e8/Onion_Dog.png/revision/latest/scale-to-width-down/100?cb=20240211181128"
    },
    {
        "name": "Stuffed peppers",
        "level_required": "80",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/06/Stuffed_Peppers.png/revision/latest/scale-to-width-down/100?cb=20240411151408"
    },
    {
        "name": "Ginger essential oil",
        "level_required": "80",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/47/Ginger_Essential_Oil.png/revision/latest/scale-to-width-down/100?cb=20240616080909"
    },
    {
        "name": "Milk tea",
        "level_required": "81",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d5/Milk_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111407"
    },
    {
        "name": "Bell pepper soup",
        "level_required": "81",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/81/Bell_Pepper_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209021442"
    },
    {
        "name": "Chocolate fondue",
        "level_required": "81",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/ce/Chocolate_Fondue.png/revision/latest/scale-to-width-down/100?cb=20240411150042"
    },
    {
        "name": "Peony",
        "level_required": "82",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/50/Peony.png/revision/latest/scale-to-width-down/100?cb=20240219030430"
    },
    {
        "name": "Quesadilla",
        "level_required": "82",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Quesadilla.png/revision/latest/scale-to-width-down/100?cb=20240212103004"
    },
    {
        "name": "Fruit salad",
        "level_required": "82",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9e/Fruit_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211102701"
    },
    {
        "name": "Crunchy Donut",
        "level_required": "82",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/46/Crunchy_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212101719"
    },
    {
        "name": "Pasta carbonara",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cd/Pasta_Carbonara.png/revision/latest/scale-to-width-down/100?cb=20240211180005"
    },
    {
        "name": "Peach ice cream",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/72/Peach_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411152720"
    },
    {
        "name": "Honey tea",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b8/Honey_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111138"
    },
    {
        "name": "Broccoli",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Broccoli.png/revision/latest/scale-to-width-down/100?cb=20240218150508"
    },
    {
        "name": "Broccoli pasta",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a8/Broccoli_Pasta.png/revision/latest/scale-to-width-down/100?cb=20240211175501"
    },
    {
        "name": "Rice omelet",
        "level_required": "83",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b2/Rice_Omelet.png/revision/latest/scale-to-width-down/100?cb=20240212104100"
    },
    {
        "name": "Summer salad",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/30/Summer_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211105900"
    },
    {
        "name": "Grapes",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/39/Grapes.png/revision/latest/scale-to-width-down/100?cb=20240218152214"
    },
    {
        "name": "Grape juice",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/24/Grape_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223070201"
    },
    {
        "name": "Onion melt",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/54/Onion_Melt.png/revision/latest/scale-to-width-down/100?cb=20240211170015"
    },
    {
        "name": "Honey soap",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Honey_Soap.png/revision/latest/scale-to-width-down/100?cb=20240411151024"
    },
    {
        "name": "Lemon lotion",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Lemon_Lotion.png/revision/latest/scale-to-width-down/100?cb=20240411151054"
    },
    {
        "name": "Colorful Candles",
        "level_required": "84",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/19/Colorful_Candles.png/revision/latest/scale-to-width-down/100?cb=20240411150229"
    },
    {
        "name": "Mint",
        "level_required": "85",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/13/Mint.png/revision/latest/scale-to-width-down/100?cb=20240219025557"
    },
    {
        "name": "Mint essential oil",
        "level_required": "85",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/33/Mint_Essential_Oil.png/revision/latest/scale-to-width-down/135?cb=20240428095620"
    },
    {
        "name": "Grape jam",
        "level_required": "85",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fa/Grape_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208152012"
    },
    {
        "name": "Mint ice cream",
        "level_required": "85",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b9/Mint_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411152759"
    },
    {
        "name": "Flower crown",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/ce/Flower_Crown.png/revision/latest/scale-to-width-down/100?cb=20240211173705"
    },
    {
        "name": "Lemon tea",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/28/Lemon_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111316"
    },
    {
        "name": "Bacon fondue",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d0/Bacon_Fondue.png/revision/latest/scale-to-width-down/100?cb=20240411145310"
    },
    {
        "name": "Peanut noodles",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/20/Peanut_Noodles.png/revision/latest/scale-to-width-down/100?cb=20240411151227"
    },
    {
        "name": "Gingerbread cookie",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/02/Gingerbread_Cookie.png/revision/latest/scale-to-width-down/100?cb=20240411150653"
    },
    {
        "name": "Cream Donut",
        "level_required": "86",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/60/Cream_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212101625"
    },
    {
        "name": "Nachos",
        "level_required": "87",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4c/Nachos.png/revision/latest/scale-to-width-down/100?cb=20240212102910"
    },
    {
        "name": "Spicy pasta",
        "level_required": "87",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e6/Spicy_Pasta.png/revision/latest/scale-to-width-down/100?cb=20180412211159"
    },
    {
        "name": "Broccoli soup",
        "level_required": "87",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b6/Broccoli_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209021523"
    },
    {
        "name": "Bacon fries",
        "level_required": "87",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/80/Bacon_Fries.png/revision/latest/scale-to-width-down/100?cb=20240411145403"
    },
    {
        "name": "Potato Omelet",
        "level_required": "87",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/ca/Potato_Omelet.png/revision/latest/scale-to-width-down/100?cb=20240212103708"
    },
    {
        "name": "Mixed smoothie",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6b/Mixed_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171601"
    },
    {
        "name": "Banana",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/69/Banana.png/revision/latest/scale-to-width-down/100?cb=20240219032506"
    },
    {
        "name": "Iced banana latte",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b0/Iced_Banana_Latte.png/revision/latest/scale-to-width-down/100?cb=20240209013217"
    },
    {
        "name": "Apple ginger tea",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e3/Apple_Ginger_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111044"
    },
    {
        "name": "Bacon Donut",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/06/Bacon_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212101525"
    },
    {
        "name": "Passion fruit",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fb/Passion_Fruit.png/revision/latest/scale-to-width-down/100?cb=20240219030332"
    },
    {
        "name": "Passion fruit juice",
        "level_required": "88",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/35/Passion_Fruit_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223071742"
    },
    {
        "name": "Orange tea",
        "level_required": "89",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8a/Orange_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111954"
    },
    {
        "name": "Fruit cake",
        "level_required": "89",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/47/Fruit_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074725"
    },
    {
        "name": "Mushroom",
        "level_required": "89",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8c/Mushroom.png/revision/latest/scale-to-width-down/100?cb=20240219025703"
    },
    {
        "name": "Mushroom salad",
        "level_required": "89",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Mushroom_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211105405"
    },
    {
        "name": "Tofu stir fry",
        "level_required": "89",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/db/Tofu_Stir_Fry.png/revision/latest/scale-to-width-down/100?cb=20240411151437"
    },
    {
        "name": "Candy bouquet",
        "level_required": "90",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1b/Candy_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240209042614"
    },
    {
        "name": "Eggplant",
        "level_required": "90",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Eggplant.png/revision/latest/scale-to-width-down/100?cb=20240218151903"
    },
    {
        "name": "Grilled eggplant",
        "level_required": "90",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/77/Grilled_Eggplant.png/revision/latest/scale-to-width-down/100?cb=20191023233306"
    },
    {
        "name": "Banana bread",
        "level_required": "91",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/35/Banana_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205083946"
    },
    {
        "name": "Cheese fondue",
        "level_required": "91",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3a/Cheese_Fondue.png/revision/latest/scale-to-width-down/100?cb=20240411145907"
    },
    {
        "name": "Hand pies",
        "level_required": "91",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/96/Hand_Pies.png/revision/latest/scale-to-width-down/100?cb=20240411150916"
    },
    {
        "name": "Pickles",
        "level_required": "91",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c7/Pickles.png/revision/latest/scale-to-width-down/100?cb=20240411151239"
    },
    {
        "name": "Watermelon",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/06/Watermelon.png/revision/latest/scale-to-width-down/100?cb=20240219032022"
    },
    {
        "name": "Iced tea",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4f/Iced_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111230"
    },
    {
        "name": "Goat cheese toast",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/87/Goat_Cheese_Toast.png/revision/latest/scale-to-width-down/100?cb=20240211165644"
    },
    {
        "name": "Watermelon juice",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a3/Watermelon_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223071838"
    },
    {
        "name": "Birthday Bouquet",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/23/Birthday_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240411145536"
    },
    {
        "name": "Passion fruit pie",
        "level_required": "92",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/65/Passion_Fruit_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150628"
    },
    {
        "name": "Soft bouquet",
        "level_required": "93",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8a/Soft_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240209042807"
    },
    {
        "name": "Black sesame smoothie",
        "level_required": "93",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3c/Black_Sesame_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171316"
    },
    {
        "name": "Exfoliating soap",
        "level_required": "93",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/38/Exfoliating_Soap.png/revision/latest/scale-to-width-down/100?cb=20240411150337"
    },
    {
        "name": "Filled Donut",
        "level_required": "93",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/30/Filled_Donut.png/revision/latest/scale-to-width-down/100?cb=20240212102005"
    },
    {
        "name": "Plum",
        "level_required": "94",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e6/Plum.png/revision/latest/scale-to-width-down/100?cb=20240219033810"
    },
    {
        "name": "Banana pancakes",
        "level_required": "94",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4f/Banana_Pancakes.png/revision/latest/scale-to-width-down/100?cb=20240205164435"
    },
    {
        "name": "Plum jam",
        "level_required": "94",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3a/Plum_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208152615"
    },
    {
        "name": "Clay",
        "level_required": "94",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a2/Clay.png/revision/latest/scale-to-width-down/100?cb=20240218151529"
    },
    {
        "name": "Tea pot",
        "level_required": "94",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6e/Tea_Pot.png/revision/latest/scale-to-width-down/100?cb=20240212142515"
    },
    {
        "name": "Floral candle",
        "level_required": "95",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c8/Floral_Candle.png/revision/latest/scale-to-width-down/100?cb=20240209023546"
    },
    {
        "name": "Chocolate roll",
        "level_required": "95",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a3/Chocolate_Roll.png/revision/latest/scale-to-width-down/100?cb=20240411150118"
    },
    {
        "name": "Canned fish",
        "level_required": "95",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/81/Canned_Fish.png/revision/latest/scale-to-width-down/100?cb=20240411145843"
    },
    {
        "name": "Chickpea",
        "level_required": "95",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/02/Chickpea.png/revision/latest/scale-to-width-down/100?cb=20240218151443"
    },
    {
        "name": "Hummus",
        "level_required": "95",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/78/Hummus.png/revision/latest/scale-to-width-down/100?cb=20240210055405"
    },
    {
        "name": "Banana split",
        "level_required": "96",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/bd/Banana_Split.png/revision/latest/scale-to-width-down/100?cb=20240208104115"
    },
    {
        "name": "Fish skewer",
        "level_required": "96",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/80/Fish_Skewer.png/revision/latest/scale-to-width-down/100?cb=20240223075951"
    },
    {
        "name": "Passion fruit jam",
        "level_required": "96",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d7/Passion_Fruit_Jam.png/revision/latest/scale-to-width-down/100?cb=20240208152409"
    },
    {
        "name": "Potted plant",
        "level_required": "96",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a1/Potted_Plant.png/revision/latest/scale-to-width-down/100?cb=20240212143019"
    },
    {
        "name": "Mint tea",
        "level_required": "97",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/40/Mint_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212111658"
    },
    {
        "name": "Mushroom pot pie",
        "level_required": "97",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c2/Mushroom_Pot_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207150536"
    },
    {
        "name": "Mango",
        "level_required": "97",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/38/Mango.png/revision/latest/scale-to-width-down/100?cb=20240219033328"
    },
    {
        "name": "Mango juice",
        "level_required": "97",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e1/Mango_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223071922"
    },
    {
        "name": "Flower pendant",
        "level_required": "98",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ae/Flower_Pendant.png/revision/latest/scale-to-width-down/100?cb=20240208162301"
    },
    {
        "name": "Chili poppers",
        "level_required": "98",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/8f/Chili_Poppers.png/revision/latest/scale-to-width-down/100?cb=20240212130039"
    },
    {
        "name": "Falafel",
        "level_required": "98",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/5c/Falafel.png/revision/latest/scale-to-width-down/100?cb=20240411150353"
    },
    {
        "name": "Kimchi",
        "level_required": "98",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/43/Kimchi.png/revision/latest/scale-to-width-down/100?cb=20240411151034"
    },
    {
        "name": "Eggplant parmesan",
        "level_required": "99",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/73/Eggplant_Parmesan.png/revision/latest/scale-to-width-down/100?cb=20240207145953"
    },
    {
        "name": "Honey face mask",
        "level_required": "99",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Honey_Face_Mask.png/revision/latest/scale-to-width-down/100?cb=20240411150933"
    },
    {
        "name": "Clay mug",
        "level_required": "99",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Clay_Mug.png/revision/latest/scale-to-width-down/100?cb=20240212142657"
    },
    {
        "name": "Rich fudge",
        "level_required": "99",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2e/Rich_Fudge.png/revision/latest/scale-to-width-down/100?cb=20240212143940"
    },
    {
        "name": "Cocoa smoothie",
        "level_required": "100",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c4/Cocoa_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240303131238"
    },
    {
        "name": "Fried candy bar",
        "level_required": "100",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/96/Fried_Candy_Bar.png/revision/latest/scale-to-width-down/100?cb=20240411150432"
    },
    {
        "name": "Tart dressing",
        "level_required": "100",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/98/Tart_Dressing.png/revision/latest/scale-to-width-down/100?cb=20240210060010"
    },
    {
        "name": "Tropical fondue",
        "level_required": "100",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f8/Tropical_Fondue.png/revision/latest/scale-to-width-down/100?cb=20240212120747"
    },
    {
        "name": "Chamomile Tea",
        "level_required": "100",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7e/Chamomile_Tea.png/revision/latest/scale-to-width-down/100?cb=20241209181932"
    },
    {
        "name": "Mushroom pasta",
        "level_required": "101",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2d/Mushroom_Pasta.png/revision/latest/scale-to-width-down/100?cb=20240211175832"
    },
    {
        "name": "Coconut",
        "level_required": "101",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2f/Coconut.png/revision/latest/scale-to-width-down/100?cb=20240219032853"
    },
    {
        "name": "Macaroon",
        "level_required": "101",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d0/Macaroon.png/revision/latest/scale-to-width-down/100?cb=20240303134131"
    },
    {
        "name": "Plum smoothie",
        "level_required": "102",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c5/Plum_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240211171753"
    },
    {
        "name": "Dried fruit",
        "level_required": "102",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/66/Dried_Fruit.png/revision/latest/scale-to-width-down/100?cb=20240411150308"
    },
    {
        "name": "Mint fudge",
        "level_required": "102",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/40/Mint_Fudge.png/revision/latest/scale-to-width-down/100?cb=20240212150535"
    },
    {
        "name": "Coconut ice cream",
        "level_required": "102",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d9/Coconut_Ice_Cream.png/revision/latest/scale-to-width-down/100?cb=20240411150138"
    },
    {
        "name": "Samosa",
        "level_required": "103",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b5/Samosa.png/revision/latest/scale-to-width-down/100?cb=20240212130830"
    },
    {
        "name": "Plain yogurt",
        "level_required": "103",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/6a/Plain_Yogurt.png/revision/latest/scale-to-width-down/100?cb=20240215045214"
    },
    {
        "name": "Mushroom soup",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d7/Mushroom_Soup.png/revision/latest/scale-to-width-down/100?cb=20240209022414"
    },
    {
        "name": "Chili fudge",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a2/Chili_Fudge.png/revision/latest/scale-to-width-down/100?cb=20240212144118"
    },
    {
        "name": "Tropical smoothie",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/3e/Tropical_Smoothie.png/revision/latest/scale-to-width-down/100?cb=20240411151509"
    },
    {
        "name": "Guava",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/87/Guava.png/revision/latest/scale-to-width-down/100?cb=20240219033102"
    },
    {
        "name": "Guava juice",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c7/Guava_Juice.png/revision/latest/scale-to-width-down/100?cb=20240223072248"
    },
    {
        "name": "Guava compote",
        "level_required": "104",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4e/Guava_Compote.png/revision/latest/scale-to-width-down/100?cb=20240411150739"
    },
    {
        "name": "Strawberry yogurt",
        "level_required": "105",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/52/Strawberry_Yogurt.png/revision/latest/scale-to-width-down/100?cb=20240215045355"
    },
    {
        "name": "Veggie bouquet",
        "level_required": "106",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f9/Veggie_Bouquet.png/revision/latest/scale-to-width-down/100?cb=20240411151526"
    },
    {
        "name": "Chickpea stew",
        "level_required": "106",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/a5/Chickpea_Stew.png/revision/latest/scale-to-width-down/100?cb=20240426122233"
    },
    {
        "name": "Fruit sorbet",
        "level_required": "106",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/b9/Fruit_Sorbet.png/revision/latest/scale-to-width-down/100?cb=20240411150614"
    },
    {
        "name": "Pomegranate",
        "level_required": "107",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1b/Pomegranate.png/revision/latest/scale-to-width-down/100?cb=20240219033910"
    },
    {
        "name": "Pomegranate tea",
        "level_required": "107",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/f1/Pomegranate_Tea.png/revision/latest/scale-to-width-down/100?cb=20240212113036"
    },
    {
        "name": "Lemon fudge",
        "level_required": "108",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d2/Lemon_Fudge.png/revision/latest/scale-to-width-down/100?cb=20240212150239"
    },
    {
        "name": "Pomegranate cake",
        "level_required": "108",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9d/Pomegranate_Cake.png/revision/latest/scale-to-width-down/100?cb=20240223074926"
    },
    {
        "name": "Hummus wrap",
        "level_required": "109",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/31/Hummus_Wrap.png/revision/latest/scale-to-width-down/100?cb=20240211165850"
    },
    {
        "name": "Tropical yogurt",
        "level_required": "109",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/cc/Tropical_Yogurt.png/revision/latest/scale-to-width-down/100?cb=20240215045547"
    },
    {
        "name": "Chili stew",
        "level_required": "109",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/c6/Chili_Stew.png/revision/latest/scale-to-width-down/100?cb=20240411150019"
    },
    {
        "name": "Plain cupcake",
        "level_required": "109",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/c/ce/Plain_Cupcake.png/revision/latest/scale-to-width-down/100?cb=20240411151308"
    },
    {
        "name": "Guava cupcake",
        "level_required": "109",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9e/Guava_Cupcake.png/revision/latest/scale-to-width-down/100?cb=20240411150749"
    },
    {
        "name": "Rice ball",
        "level_required": "110",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/1d/Rice_Ball.png/revision/latest/scale-to-width-down/100?cb=20210907213244"
    },
    {
        "name": "Fresh Diffuser",
        "level_required": "110",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2f/Fresh_Diffuser.png/revision/latest/scale-to-width-down/100?cb=20241209194636"
    },
    {
        "name": "Peanut fudge",
        "level_required": "111",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2d/Peanut_Fudge.png/revision/latest/scale-to-width-down/100?cb=20220428150457"
    },
    {
        "name": "Tropical cupcake",
        "level_required": "112",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/9/9b/Tropical_Cupcake.png/revision/latest/scale-to-width-down/100?cb=20240411151452"
    },
    {
        "name": "Winter stew",
        "level_required": "112",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/e/e3/Winter_Stew.png/revision/latest/scale-to-width-down/100?cb=20240411151558"
    },
    {
        "name": "Zesty Perfume",
        "level_required": "113",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/a/ac/Zesty_Perfume.png/revision/latest/scale-to-width-down/100?cb=20241209193805"
    },
    {
        "name": "Cookie cupcake",
        "level_required": "114",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/8/86/Cookie_Cupcake.png/revision/latest/scale-to-width-down/100?cb=20250112061229"
    },
    {
        "name": "Plain waffles",
        "level_required": "114",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/66/Plain_Waffles.png/revision/latest/scale-to-width-down/100?cb=20240217133029"
    },
    {
        "name": "Berry waffles",
        "level_required": "114",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/29/Berry_Waffles.png/revision/latest/scale-to-width-down/100?cb=20240217133201"
    },
    {
        "name": "Calming Diffuser",
        "level_required": "116",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d3/Calming_Diffuser.png/revision/latest/scale-to-width-down/100?cb=20241209194317"
    },
    {
        "name": "Orange salad",
        "level_required": "117",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/b/bb/Orange_Salad.png/revision/latest/scale-to-width-down/100?cb=20240211105603"
    },
    {
        "name": "Chocolate waffles",
        "level_required": "117",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/4/4d/Chocolate_Waffles.png/revision/latest/scale-to-width-down/100?cb=20240217133520"
    },
    {
        "name": "Breakfast waffles",
        "level_required": "119",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/5/59/Breakfast_Waffles.png/revision/latest/scale-to-width-down/100?cb=20240217133249"
    },
    {
        "name": "Oats",
        "level_required": "119",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/3/34/Oats.png/revision/latest/scale-to-width-down/100?cb=20230920004146"
    },
    {
        "name": "Breakfast bowl",
        "level_required": "119",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2e/Breakfast_Bowl.png/revision/latest/scale-to-width-down/100?cb=20240411145742"
    },
    {
        "name": "Apple porridge",
        "level_required": "119",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/d/d3/Apple_Porridge.png/revision/latest/scale-to-width-down/100?cb=20240217161228"
    },
    {
        "name": "Pineapple coconut bars",
        "level_required": "120",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/6/61/Pineapple_Coconut_Bars.png/revision/latest/scale-to-width-down/100?cb=20240205084133"
    },
    {
        "name": "Sweet porridge",
        "level_required": "120",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fb/Sweet_Porridge.png/revision/latest/scale-to-width-down/100?cb=20240217161407"
    },
    {
        "name": "Rich soap",
        "level_required": "121",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/2/2e/Rich_Soap.png/revision/latest/scale-to-width-down/100?cb=20240212124127"
    },
    {
        "name": "Fresh porridge",
        "level_required": "122",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/0/09/Fresh_Porridge.png/revision/latest/scale-to-width-down/100?cb=20240217161318"
    },
    {
        "name": "Vanilla milkshake",
        "level_required": "124",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/1/14/Vanilla_Milkshake.png/revision/latest/scale-to-width-down/100?cb=20240217094936"
    },
    {
        "name": "Mocha milkshake",
        "level_required": "125",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/7/7d/Mocha_Milkshake.png/revision/latest/scale-to-width-down/100?cb=20240217095145"
    },
    {
        "name": "Fruity milkshake",
        "level_required": "126",
        "image_url": "https://static.wikia.nocookie.net/hayday/images/f/fb/Fruity_Milkshake.png/revision/latest/scale-to-width-down/100?cb=20240217095037"
    }
];