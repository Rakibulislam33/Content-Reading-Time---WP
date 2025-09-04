import React, { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";

const IsotopeGallery = ({
  filter,
  filterLayout,
  filterAllText,
  hideAllButton,
  columns,
  gutter,
  children,
}) => {
  const [mount, setMount] = useState(false);
  const isotope = useRef();
  const isotopeSelector = useRef();
  useEffect(() => {
    setMount(true);
    if (isotopeSelector.current) {
      isotope.current = new Isotope(isotopeSelector.current, {
        layoutMode: "masonry",
        itemSelector: ".dnxte-msnary-item",
        percentPosition: true,
        stagger: 0,
        horizontalOrder: true,
        masonry: {
          cols: columns,
          gutter: parseInt(gutter, 10),
        },
      });
      if (isotope.current) isotope.current.layout();
    }

    const isotopeLayout = () => {
      if (isotope.current) isotope.current.layout();
    };
    if (isotopeSelector.current) {
      window.addEventListener("resize", isotopeLayout);
      window.addEventListener("scroll", isotopeLayout);
    }
    // cleanup
    if (isotope.current) {
      return () => {
        isotope.current.destroy();
        window.removeEventListener("resize", isotopeLayout);
        window.removeEventListener("scroll", isotopeLayout);
      };
    }
  }, [columns, mount]);

  if (!mount) return "";


  return (
    <div className="dnxte-msnary-wrapper">
      {
        Array.isArray(filter) && (
        <div className="dnxte-msnary-item-wrapper">
          <ul
            className={`dnxte-msnary-filter-items dnxte-msnary-layout-${filterLayout}`}
          >
            {hideAllButton && "on" === hideAllButton && (
              <li className="dnxte-msnary-filter-item active">
                {filterAllText}
              </li>
            )}

            {filter.length > 0 &&
                filter.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
                <li
                  key={item.term_id}
                  className={`dnxte-msnary-filter-item ${
                    "off" === hideAllButton && index === 0 ? "active" : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="dnxte-grid">
        <div className="grid-sizer" />
        <div ref={isotopeSelector} className="grid dnxte-msnary-grid">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IsotopeGallery;
