import html from "html-literal";

export default state => html`
  <section id="ideas">
    <form id="ideas" method="POST" action="">
      <h2>Submit an Idea or Rating</h2>
      <div>
        <label for="Ratings">Ratings:</label>
        <select id="rating" name="rating">
          <option value="">Select a rating</option>
          <option value="excellent">5 Stars</option>
          <option value="above average">4 Stars</option>
          <option value="neutral">3 Stars</option>
          <option value="below average">2 Stars</option>
          <option value="horrible">1 Stars</option>
        </select>
      </div>
      <div>
        <label for="cheese">Cheese:</label>
        <input
          type="text"
          name="cheese"
          id="cheese"
          placeholder="Enter Cheese"
          required
        />
      </div>
      <div>
        <label for="sauce">Sauce:</label>
        <input
          type="text"
          name="sauce"
          id="sauce"
          placeholder="Enter Sauce"
          required
        />
      </div>
      <div>
        <label for="toppings">Toppings:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="toppings"
          value="Chicken"
        />
        <label for="top1">chicken</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="toppings"
          value="onion"
        />
        <label for="top2">onion</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="toppings"
          value="spinach"
        />
        <label for="top3">spinach</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="toppings"
          value="Extra cheese"
        />
        <label for="top4">extra cheese</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="toppings"
          value="red pepper"
        />
        <label for="top5">red pepper</label>
      </div>
      <input
        type="hidden"
        name="customer"
        id="customer"
        value="Anonymous Customer"
      />
      <input type="submit" name="submit" value="Submit Pizza" />
    </form>
  </section>
`;
