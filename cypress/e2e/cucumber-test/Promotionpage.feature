Feature: Promotion Page
    I want to validate Promotions Tab

    @Home @BlueColour
    Scenario: I want to verify Label
        Given I open fairprice promotion tab
        When I verify label "PWP", "Weekly Deals" and "Digital Club Exclusive"
        And I click button PWP
        Then I verify label product PWP

    @Home @BRedColour
    Scenario: I want to verify Label - Fail
        Given I open fairprice promotion tab
        When I verify label "PWP", "Weekly Deals" and "Digital Club Exclusive"
        And I click button PWP
        Then I verify label product New