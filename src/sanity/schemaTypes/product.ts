// schemas/product.js
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
    }),
    defineField({
      name: 'isNew',
      title: 'Is New?',
      type: 'boolean',
    }),
    defineField({
      name: 'isSale',
      title: 'Is Sale?',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      description: 'Mark if this product is featured',
      initialValue: false, // Default value
    }),
  ],
});
