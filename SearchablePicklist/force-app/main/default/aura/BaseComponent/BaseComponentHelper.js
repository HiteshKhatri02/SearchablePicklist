({
    handleDoInitAction : function(component) {
        var fruits = [];
        fruits.push({'label': 'Apple', 'value': 'Apple'});
        fruits.push({'label': 'Apricots', 'value': 'Apricots'});
        fruits.push({'label': 'Avocados', 'value': 'Avocados'});
        fruits.push({'label': 'Bananas', 'value': 'Bananas'});
        fruits.push({'label': 'Boysenberries', 'value': 'Boysenberries'});
        fruits.push({'label': 'Blueberries', 'value': 'Blueberries'});
        fruits.push({'label': 'Cherries', 'value': 'Cherries'});
        fruits.push({'label': 'Cantaloupe', 'value': 'Cantaloupe'});
        fruits.push({'label': 'Damson plum', 'value': 'Damson plum'});
        fruits.push({'label': 'Dragon Fruit', 'value': 'Dragon Fruit'});
        fruits.push({'label': 'Grapes', 'value': 'Grapes'});
        fruits.push({'label': 'Honeydew melon', 'value': 'Honeydew melon'});
        fruits.push({'label': 'Kiwi', 'value': 'Kiwi'});
        fruits.push({'label': 'Lychee', 'value': 'Lychee'});
        fruits.push({'label': 'Mango', 'value': 'Mango'});
        fruits.push({'label': 'Mulberry', 'value': 'Mulberry'});
        fruits.push({'label': 'Olive', 'value': 'Olive'});
        fruits.push({'label': 'Oranges', 'value': 'Oranges'});
        fruits.push({'label': 'Raspberries', 'value': 'Raspberries'});
        fruits.push({'label': 'Tart Cherries', 'value': 'Tart Cherries'});
        fruits.push({'label': 'Watermelon', 'value': 'Watermelon'});
        
        component.set('v.options',fruits);
        component.set('v.isShowPickListComponent',true);
    },
})
