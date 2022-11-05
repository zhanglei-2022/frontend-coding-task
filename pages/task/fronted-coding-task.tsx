import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

const FrontedCodingTask: NextPage = () => {
  return (
    <>
      <Head>
        <title>frontend-coding-task.md</title>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8"></meta>
      </Head>
      <Script id="stripe-js"
        src="https://unpkg.com/mermaid/dist/mermaid.min.js"
        strategy="beforeInteractive"
        onLoad={(mermaid) => {
          mermaid.initialize({
            startOnLoad: true,
            theme: document.body.classList.contains('vscode-dark') || document.body.classList.contains('vscode-high-contrast')
                ? 'dark'
                : 'default'
          })
        }}></Script>
      <h1 id="frontend-coding-challenge--aspectaai" className=''>
        Frontend Coding Challenge @ Aspecta.ai
      </h1>
      <p>Thank you for applying for the frontend developer position at Aspecta.ai. We will ask you to complete a coding challenge to show your expertise.</p>
      <p>You will have 3 days to complete several tasks. During the challenge period, if you have any questions, please contact jack@aspecta.ai.</p>
      <h2 id="task-description">Task description</h2>
      <ul>
        <li>
          <p>You will have the following resources:</p>
          <ol>
            <li>a design doc, including an input page and a skill card.</li>
            <li>an API call example.</li>
          </ol>
        </li>
        <li>
          <p>You are asked to complete the following coding tasks:</p>
          <ol>
            <li>
              <strong>Frontend: Skill Card</strong>. Using the <code>skills</code>, <code>skill_set</code> information in the API return, you need to develop a webpage to display the skill card as shown in the design doc.
            </li>
            <li>
              <strong>Frontend &amp; Backend: Input Page</strong>. Simulating the API call example, you need to develop an input page as the design doc shows. The input page accepts necessary inputs and calls the API.
            </li>
            <li>
              <strong>Frontend &amp; Backend: Redirect</strong>. After the input page calls the API and gets a return, you need to redirect to the skill card page.
            </li>
          </ol>
        </li>
      </ul>
      <h2 id="task-requirements">Task requirements</h2>
      <ul>
        <li>
          <p><em>Implementation.</em></p>
          <ul>
            <li>You may use any frameworks, libraries, or languages you deem appropriate to build this project. However, using a modern web library or framework, such as React or Vue, is preferred, as it aligns best with our current development practices.</li>
            <li>We expect that the component will be designed for common desktop screens. Some screen sizes we are designing for: 1280*800, 1366*768, 1920*1080, etc.</li>
            <li>Out of scope for this project: accessibility (a11y), internationalization (i18n).</li>
          </ul>
        </li>
        <li>
          <p><em>Design match.</em></p>
          <ul>
            <li>Your implementation should be similar to the design.</li>
            <li>However, since we are providing an incomplete design doc, it's normal that some part of the design doc is hard to implement. You can skip those parts or choose your way to implement them.</li>
          </ul>
        </li>
        <li>
          <p><em>Time.</em></p>
          <ul>
            <li>This project should take no more than 12 hours of work, and should be completed within 3 days of receipt.</li>
            <li>In case you don't have time to finish all the tasks, please try to do the tasks in order, since they come from simple to hard.</li>
          </ul>
        </li>
      </ul>
      <h2 id="deliverables">Deliverables</h2>
      <ol>
        <li>A <strong>private</strong> GitHub code repo with all necessary files for us to run the code locally. Add jack@aspecta.ai as a member with admin access, so that we can review the code and also test it ourselves. <strong>Please do not post publicly.</strong></li>
        <li>In the repo, have a README file for documentation. Document the steps for us to install dependencies and launch the project. You can also include your high-level thought process for any important design/implementation decisions you have made.</li>
        <li>Try to use small commits, and keep commit messages informative.</li>
      </ol>
      <h2 id="task-resources">Task resources</h2>
      <h3 id="design-doc">Design doc</h3>
      <ul>
        <li>
          <p><em>Skill card</em>
          <img src="/skill-card.png" alt="Skill card" className='max-w-full max-h-full'/></p>
        </li>
        <li>
          <p><em>Input page</em>
          <img src="/input-page.png" alt="Input page" className='max-w-full max-h-full'/></p>
        </li>
      </ul>
      <h3 id="api-call">API call</h3>
      <ul>
        <li><em>Example API call</em></li>
      </ul>
      <pre className="hljs"><code><div>{
        `curl --header "Content-Type: application/json" \
        --request POST \
        --data-raw '{"skill_names": ["deep learning"], "candidates": [{"identifier": "", "accounts": {"github": "yangji9181", "stackoverflow": "", "linkedin": "carlyang81", "academic": "2524788031"}}], "appid": "bc17818b-d70e-4883-8148-74a2bea56674"}' \
        https://service.aspecta.ai/assess_candidates`}
      </div></code></pre>
      <ul>
        <li><em>Expected return</em></li>
      </ul>
      <pre className="hljs"><code><div>{`
          "candidates": [
              {
                  "identifier": "",
                  "overall_score": 88.0,
                  "skills": [
                      {
                          "name": "computer vision",
                          "score": 86.43,
                          "average": 76.44,
                          "sources": [
                              "academic"
                          ]
                      },
                      {
                          "name": "deep learning",
                          "score": 88.0,
                          "average": 77.34,
                          "sources": [
                              "academic",
                              "github"
                          ]
                      },
                      {
                          "name": "natural language processing",
                          "score": 88.39,
                          "average": 78.99,
                          "sources": [
                              "academic",
                              "github"
                          ]
                      },
                      {
                          "name": "neural network",
                          "score": 84.75,
                          "average": 76.41,
                          "sources": [
                              "academic",
                              "github"
                          ]
                      },
                      {
                          "name": "time series",
                          "score": 84.0,
                          "average": 79.05,
                          "sources": [
                              "academic"
                          ]
                      },
                      {
                          "name": "reinforcement learning",
                          "score": 91.84,
                          "average": 77.83,
                          "sources": [
                              "academic"
                          ]
                      },
                      {
                          "name": "adversarial robustness",
                          "score": 80.43,
                          "average": 78.36,
                          "sources": [
                              "academic"
                          ]
                      },
                      {
                          "name": "data mining",
                          "score": 100.0,
                          "average": 76.47,
                          "sources": [
                              "academic"
                          ]
                      },
                      {
                          "name": "graph learning",
                          "score": 100.0,
                          "average": 79.45,
                          "sources": [
                              "academic"
                          ]
                      }
                  ],
                  "info": {
                      "name": "Carl Yang",
                      "contact": null,
                      "education_background": "University of Illinois at Urbana-Champaign",
                      "education_major": "Computer Science",
                      "education_degree": "Ph.D.",
                      "experience_level": "Expert",
                      "open_to_new_opportunity": null,
                      "current_employer": "Emory University",
                      "location": "Atlanta, Georgia, US",
                      "occupation": "Assistant Professor",
                      "profile_picture": "https://s3.us-west-000.backblazeb2.com/proxycurl/person/carlyang81/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=0004d7f56a0400b0000000001%2F20220428%2Fus-west-000%2Fs3%2Faws4_request&amp;X-Amz-Date=20220428T140613Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=01391c6b25fae1afc87aaf9c9107e842f2d84a2f45afb342eabb30c49a932def",
                      "url": "https://github.com/yangji9181"
                  },
                  "accounts": {
                      "github": "yangji9181",
                      "academic": "2524788031",
                      "stackoverflow": "",
                      "linkedin": "carlyang81"
                  },
                  "badges": []
              }
          ],
          "count": 1,
          "skill_set": {
              "deep learning": [
                  "natural language processing",
                  "neural network",
                  "computer vision",
                  "reinforcement learning",
                  "data mining",
                  "robotics",
                  "attention mechanism",
                  "graph learning",
                  "adversarial robustness",
                  "self-supervised learning",
                  "unsupervised learning",
                  "generative adversarial network",
                  "time series"
              ]
          },
          "remaining_quota": {
              "search": 0,
              "assessment": 98,
              "highlight": 100,
              "retrieval": 1000,
              "hc_search": 0,
              "hc_assessment": 49,
              "hc_highlight": 50,
              "hc_retrieval": 1000
          }`
      }
      </div></code></pre>
    </>
  )
}

export default FrontedCodingTask
