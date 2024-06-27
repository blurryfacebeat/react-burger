type TCreateIngredientItemProps = {
  id?: string;
  type?: 'bun' | 'main';
};

export const createIngredientItem = (
  { id = '1', type = 'main' }: TCreateIngredientItemProps = {
    id: '1',
    type: 'main',
  },
) => ({
  _id: id,
  name: 'Ingredient',
  type: type,
  proteins: 10,
  fat: 20,
  carbohydrates: 30,
  calories: 40,
  price: 50,
  image: 'image_url',
  image_mobile: 'image_mobile_url',
  image_large: 'image_large_url',
  __v: 0,
});
