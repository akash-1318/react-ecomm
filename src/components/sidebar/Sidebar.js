import "./sidebar.css";
export default function Sidebar() {
  return (
    <>
      <aside class="filter__left">
        <div class="filter__title">
          <button class="filter__title-btn filter">Filters</button>
          <button class="filter__title-btn clear">Clear</button>
        </div>
        <div class="space__2rem"></div>
        <div class="price__filter">
          <h3>Price</h3>
          <div>
            <div class="amount__div">
              <p>50</p>
              <p>150</p>
              <p>200</p>
            </div>
            <input
              type="range"
              min="1"
              max="200"
              value="100"
              class="slider"
              id="myRange"
            />
          </div>
        </div>

        <div class="space__2rem"></div>
        <div class="filter__type">
          <h3>Category</h3>
          <div class="filter__section">
            <input type="checkbox" /> <label>Men Clothing</label>
          </div>
          <div class="filter__section">
            <input type="checkbox" /> <label>Women Clothing</label>
          </div>
        </div>

        <div class="space__2rem"></div>
        <div class="filter__type">
          <h3>Rating</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            4 stars & above
          </div>
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            3 stars & above
          </div>
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            2 stars & above
          </div>
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            1 stars & above
          </div>
        </div>

        <div class="space__2rem"></div>
        <div class="filter__type">
          <h3>Sort by</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            Price - Low to High
          </div>
          <div class="radio">
            <label for="radio-1">
              <input type="radio" name="radio" class="radio__input" />
            </label>
            Price - High to Low
          </div>
        </div>
      </aside>
    </>
  );
}
