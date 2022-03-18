import "./sidebar.css";
export default function Sidebar() {
  return (
    <>
      <aside className="filter__left">
        <div className="filter__title">
          <button className="filter__title-btn filter">Filters</button>
          <button className="filter__title-btn clear">Clear</button>
        </div>
        <div className="space__2rem"></div>
        <div className="price__filter">
          <h3>Price</h3>
          <div>
            <div className="amount__div">
              <p>50</p>
              <p>150</p>
              <p>200</p>
            </div>
            <input
              type="range"
              min="1"
              max="200"
              value="100"
              className="slider"
              id="myRange"
            />
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Category</h3>
          <div className="filter__section">
            <input type="checkbox" /> <label>Men Clothing</label>
          </div>
          <div className="filter__section">
            <input type="checkbox" /> <label>Women Clothing</label>
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Rating</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            4 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            3 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            2 stars & above
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            1 stars & above
          </div>
        </div>

        <div className="space__2rem"></div>
        <div className="filter__type">
          <h3>Sort by</h3>
          {/* <!-- Milkyway UI Radio Input --> */}
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            Price - Low to High
          </div>
          <div className="radio">
            <label for="radio-1">
              <input type="radio" name="radio" className="radio__input" />
            </label>
            Price - High to Low
          </div>
        </div>
      </aside>
    </>
  );
}
