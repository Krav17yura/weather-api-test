import React from 'react'
import './city-search-panel.css'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {getCurrentWeather} from "../../redux/actions/acCurrentWeather";

const validate = values => {
    const errors = {};
    if (!values.citySearchValue.trim()) {
        errors.citySearchValue = 'Required';
    } else if (values.citySearchValue.length > 15) {
        errors.citySearchValue = 'Must be 15 characters or less';
    }
    return errors;
};

const CitySearchPanel = () => {
const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            citySearchValue: 'Kiev'
        },
        validate,
        onSubmit: value => {
            dispatch(getCurrentWeather(value.citySearchValue))
        }
    })
    return(
        <div className="search">
            <form onSubmit={formik.handleSubmit} className='search__form'>
                <input
                    className={
                        formik.errors.citySearchValue? 'form__input inputError': 'form__input'
                    }
                    id="citySearchValue"
                    name="citySearchValue"
                    placeholder="Enter country"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.citySearchValue.trim()}
                />
                {formik.errors.citySearchValue ? <div className='inputErrorMessage'>{formik.errors.citySearchValue}</div> : null}
                <button className='btn effect01' type="submit">Submit</button>
            </form>
        </div>

    )
};

export default CitySearchPanel;
