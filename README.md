# Components Assignment 2

We will continue working on the E-commerce store. You will need to do:

1. Pass the `user` object as a prop to the `NavBar` component

   1. The `NavBar` component should say "Welcome `User.Name`" only if the `user` prop was passed down. Otherwise, it should say "login".
   2. The `NavBar` should say "`user.ItemsInCart` in your cart" If the user has more than 0 items in his shopping cart. Else it should not say anything

2. The `ProductCard` should receive as a prop the `products` variable

   1. It should accept the following props: `name`, `description`, `price`, `imageUrl`, and `isInStock`
   2. It should display the product title, description, image URL, and price that were passed to it as props
   3. It should use the logical AND operator (&&) to say "Unavailable" only when `isInStock` is set to false
   4. Add some style to it using the `style` prop. One idea would be to add a border around the card

3. The `ProductCardContainer` should accept a list of products as a prop

   1. It should generate a list of `ProductCard` components using the JS `map` method

4. Create a component called `StyleWrapper` that wraps children passed into it with a div

   1. The div should set the following CSS styles using the style prop:

   ```css
   background-color: #f8f9fa; /* Light gray background */
   padding: 20px; /* Padding around the content */
   text-align: center; /* Center-align the text */
   border-top: 1px solid #dee2e6; /* Optional border at the top */
   box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
   ```

   2. In the `App` component, pass the `Footer` component as a child to the `StyleWrapper` component

5. Push your code to GitHub open a PR to branch `master` and submit a link to the PR in Omnivox
