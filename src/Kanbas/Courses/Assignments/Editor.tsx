export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
            </textarea><br /><br />

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZS</option>
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                            <option>Letter Grade</option>
                            <option>Pass/Fail</option>
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>Oncampus</option>
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-text-entry">Online Entry Options</label>
                    </td>
                    <td>
                        <input type="radio" id="wd-text-entry" name="entry-option" /> Text Entry <br />
                        <input type="radio" id="wd-website-url" name="entry-option" /> Website URL <br />
                        <input type="radio" id="wd-media-recordings" name="entry-option" /> Media Recordings <br />
                        <input type="radio" id="wd-student-annotation" name="entry-option" /> Student Annotation <br />
                        <input type="radio" id="wd-file-upload" name="entry-option" /> File Upload <br /><br />
                    </td>

                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label><br /><br />
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" value="2024-05-20" /><br /><br />
                    </td>
                </tr>
            </table>

            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
