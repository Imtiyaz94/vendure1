import { VendurePlugin } from '@vendure/core';

@VendurePlugin({
    configuration : config =>{
         config.customFields.Product.push({
            name: 'rating',
            type: 'float',
            min:0,
            max:5
        });
        return config;
    },
});

class ProductRatingPlugin{}