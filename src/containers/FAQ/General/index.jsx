import React from 'react'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import FAQItem from '../FAQItem'

import styles from '../common.css'

const General = () => (
  <>
    <h1 styleName="title">
      <Translate value="faq.title" />
    </h1>

    <div styleName="faq-list">
      <p>
        <Translate value="faq.description.1" />
      </p>

      <p>
        <Translate value="faq.description.2" />
      </p>

      <p>
        <Translate value="faq.description.3" />
      </p>

      <p>
        <Translate value="faq.description.4" />
      </p>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.1.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faq.questions.1.answer.1" />
          </p>

          <ul styleName="list">
            <li>
              <Translate value="faq.questions.1.answer.list.1" />
            </li>
            <li>
              <Translate value="faq.questions.1.answer.list.2" />
            </li>
            <li>
              <Translate value="faq.questions.1.answer.list.3" />
            </li>
            <li>
              <Translate value="faq.questions.1.answer.list.4" />
            </li>
          </ul>

          <Translate
            value="faq.questions.1.answer.2"
            link="https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD"
            dangerousHTML
          />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.2.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faq.questions.2.answer.1" dangerousHTML />
          </p>

          <Translate value="faq.questions.2.answer.2" />
          { ' ' }
          <Link to="/faq/ethereum">
            <Translate value="common.faqEth" />
          </Link>
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.3.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faq.questions.3.answer.1" />

          <ul styleName="list">
            <li>
              <Translate value="faq.questions.3.answer.list.1" />
            </li>
            <li>
              <Translate value="faq.questions.3.answer.list.2" />
            </li>
            <li>
              <Translate value="faq.questions.3.answer.list.3" />
              { ' ' }
              <Link to="/how-it-works">
                &ldquo;
                <Translate value="common.howItWorks" />
                &rdquo;
              </Link>
            </li>
            <li>
              <Translate value="faq.questions.3.answer.list.4" dangerousHTML />
            </li>
          </ul>
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.4.question" dangerousHTML />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faq.questions.4.answer.1" class={ styles.note } dangerousHTML />
          </p>

          <p>
            <Translate value="faq.questions.4.answer.2" />
          </p>

          <Translate value="faq.questions.4.answer.3" dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.5.question" dangerousHTML />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faq.questions.5.answer.1" dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.6.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faq.questions.6.answer.1" />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.7.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faq.questions.7.answer.1" />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faq.questions.8.question" dangerousHTML />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faq.questions.8.answer.1" dangerousHTML />
          </p>

          <p>
            <Translate value="faq.questions.8.answer.2" />
          </p>

          <Translate value="faq.questions.8.answer.3" />
        </FAQItem.Answer>
      </FAQItem>
    </div>
  </>
)

export default General
