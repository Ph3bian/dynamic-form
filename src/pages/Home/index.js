import React, { useState, useEffect, useReducer } from "react";
import styles from "./home.module.scss";
import data from "./data.js";
import { UserReducer, DefaultUser } from "./user-reducer";
import { Input, Button, Select, Layout } from "components";
const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useReducer(UserReducer, DefaultUser);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setQuestions(data?.questions || []);
  };

  const handleChange = ({ target }) => {
    setUser({
      type: "UPDATE_INFO",
      payload: { [target.name]: target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `firstName: ${user.first_name},\nlastName:${user.last_name},\ncountry:${user.country},\nemail:${user.email},\nphoneNumber: "555-123-1111",\npostCode: "V6B 1S5",\nstreetAddress: "123 Evergreen Drive"`
    );
  };
  return (
    <Layout>
      <div className={styles.Home}>
        <form onSubmit={handleSubmit} className={styles.Form}>
          {questions &&
            questions.length > 0 &&
            questions.map(({ title = "", fields = [] }, id) => (
              <div key={id}>
                <h2>{title}</h2>
                <div className={[styles.FormRow, styles.isTwo].join("")}>
                  {fields.map(({ label, name, type, options }) =>
                    type === "dropdown" ? (
                      <Select
                        label={label}
                        key={name}
                        name={name}
                        options={options}
                        onChange={(e) => handleChange(e)}
                      />
                    ) : (
                      <Input
                        label={label}
                        key={name}
                        name={name}
                        value={user[name]}
                        onChange={(e) => handleChange(e)}
                        type={type}
                        placeholder={`Enter ${label.toLowerCase()}`}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          <Button type="submit" />
        </form>
      </div>
    </Layout>
  );
};
export default Home;
