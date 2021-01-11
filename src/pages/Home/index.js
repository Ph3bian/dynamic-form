import React, { useState, useEffect, useReducer } from "react";
import styles from "./home.module.scss";
import data from "./data.js";
import { UserReducer, DefaultUser } from "./user-reducer";
import { Input, Button, Select, Layout } from "components";
import { fetchData, handleSubmit, handleChange } from "./functions";
const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useReducer(UserReducer, DefaultUser);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchData(setQuestions, data);
  }, []);

  return (
    <Layout>
      <div className={styles.Home}>
        <form
          onSubmit={(e) => handleSubmit(e, user, setErrors)}
          className={styles.Form}
        >
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
                        onChange={(e) => handleChange(e, setUser)}
                        error={errors[name]}
                      />
                    ) : (
                      <Input
                        label={label}
                        key={name}
                        name={name}
                        value={user[name]}
                        onChange={(e) => handleChange(e, setUser)}
                        type={type}
                        error={errors[name]}
                        placeholder={`Enter ${label.toLowerCase()}`}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          <Button type="submit" text="Submit" />
        </form>
      </div>
    </Layout>
  );
};
export default Home;
