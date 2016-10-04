package com.app.server.service.appbasicsetup.usermanagement;
import com.app.server.service.EntityTestCriteria;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.appbasicsetup.usermanagement.LoginRepository;
import com.app.shared.appbasicsetup.usermanagement.Login;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.server.pluggable.utils.helper.RuntimeLogInfoHelper;
import com.athena.server.pluggable.utils.helper.EntityValidatorHelper;
import com.app.server.service.RandomValueGenerator;
import java.util.HashMap;
import java.util.List;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.BeforeClass;
import org.junit.Before;
import org.junit.After;
import org.springframework.mock.web.MockServletContext;
import com.spartan.pluggable.logger.api.LogManagerFactory;
import com.athena.server.pluggable.utils.AppLoggerConstant;
import org.springframework.web.context.request.RequestContextHolder;
import com.spartan.pluggable.logger.event.RequestHeaderBean;
import com.spartan.pluggable.logger.api.RuntimeLogUserInfoBean;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.junit.Assert;
import com.athena.server.pluggable.interfaces.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.app.shared.organization.contactmanagement.CoreContacts;
import com.app.server.repository.organization.contactmanagement.CoreContactsRepository;
import com.app.shared.organization.contactmanagement.Title;
import com.app.server.repository.organization.contactmanagement.TitleRepository;
import com.app.shared.organization.contactmanagement.Gender;
import com.app.server.repository.organization.contactmanagement.GenderRepository;
import com.app.shared.organization.locationmanagement.Language;
import com.app.server.repository.organization.locationmanagement.LanguageRepository;
import com.app.shared.organization.locationmanagement.Timezone;
import com.app.server.repository.organization.locationmanagement.TimezoneRepository;
import com.app.shared.organization.locationmanagement.Address;
import com.app.server.repository.organization.locationmanagement.AddressRepository;
import com.app.shared.organization.locationmanagement.AddressType;
import com.app.server.repository.organization.locationmanagement.AddressTypeRepository;
import com.app.shared.organization.locationmanagement.Country;
import com.app.server.repository.organization.locationmanagement.CountryRepository;
import com.app.shared.organization.locationmanagement.State;
import com.app.server.repository.organization.locationmanagement.StateRepository;
import com.app.shared.organization.locationmanagement.City;
import com.app.server.repository.organization.locationmanagement.CityRepository;
import com.app.shared.appbasicsetup.usermanagement.UserDetail;
import com.app.server.repository.appbasicsetup.usermanagement.UserDetailRepository;
import com.app.shared.appbasicsetup.usermanagement.UserAccessLevel;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessLevelRepository;
import com.app.shared.appbasicsetup.usermanagement.UserAccessDomain;
import com.app.server.repository.appbasicsetup.usermanagement.UserAccessDomainRepository;
import com.app.shared.appbasicsetup.usermanagement.PassRecovery;
import com.app.shared.appbasicsetup.usermanagement.Question;
import com.app.server.repository.appbasicsetup.usermanagement.QuestionRepository;
import com.app.shared.appbasicsetup.usermanagement.UserData;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { com.app.config.JPAConfig.class, com.app.config.WebConfigExtended.class })
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase extends EntityTestCriteria {

    /**
     * LoginRepository Variable
     */
    @Autowired
    private LoginRepository<Login> loginRepository;

    /**
     * RuntimeLogInfoHelper Variable
     */
    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    /**
     * EntityValidator Variable
     */
    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    /**
     * RandomValueGenerator Variable
     */
    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    /**
     * List of EntityCriteria for negative Testing
     */
    private static List<EntityTestCriteria> entityConstraint;

    /**
     *  Variable to calculate health status
     */
    @Autowired
    private ArtMethodCallStack methodCallStack;

    /**
     * MockHttpSession Variable
     */
    protected MockHttpSession session;

    /**
     * MockHttpServletRequest Variable
     */
    protected MockHttpServletRequest request;

    /**
     * MockHttpServletResponse Variable
     */
    protected MockHttpServletResponse response;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        final MockServletContext mockServletContext = new MockServletContext("file:src/main/webapp");
        try {
            final String _path = mockServletContext.getRealPath("/WEB-INF/conf/");
            LogManagerFactory.createLogManager(_path, AppLoggerConstant.LOGGER_ID);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).requestCompleted();
        RequestContextHolder.resetRequestAttributes();
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo("customer", "AAAAA", request.getRemoteHost());
        Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
        entityConstraint = addingListOfFieldForNegativeTesting();
        runtimeLogInfoHelper.setRequestHeaderBean(new RequestHeaderBean(new RuntimeLogUserInfoBean("AAAA", "AAAA", request.getRemoteHost(), 0, 0, 0), "", methodCallStack.getRequestId()));
    }

    private Login createLogin(Boolean isSave) throws Exception {
        CoreContacts corecontacts = new CoreContacts();
        corecontacts.setEmailId("WEi0NxOqBljdRT3YOzyfaMYFnsHDge0J38YiiRw7g85t6fqmdK");
        corecontacts.setMiddleName("3KtljSeLq0IYOD5C3AtGYPGYdngmjIJLVYdf585tsEKaw5ONve");
        corecontacts.setNativeLastName("ZC3kthz47yF1yzodAiN07ROGfQ9xCtj2woCZlPrVLtPcMWbTk3");
        corecontacts.setFirstName("qpKYMawdgkL8HE5Wxr3tiuiN7wrtpKe7Ho9C83NISjhffvxjBB");
        corecontacts.setPhoneNumber("p3oOv2DoFgBgYiMuJhaO");
        Title title = new Title();
        title.setTitles("FZWTGpY1xTFeoEVF9bU5F7tAPF0iYMahsJIFtcs5H2b35JSgwP");
        Title TitleTest = new Title();
        if (isSave) {
            TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
        }
        Gender gender = new Gender();
        gender.setGender("S4XZBKj07wexw74Che7scP2v2XpwZzDBiybTDjlokq4ZJDYBF1");
        Gender GenderTest = new Gender();
        if (isSave) {
            GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
        }
        Language language = new Language();
        language.setLanguageType("Xketi1HSJe23cmgLEUqyd7Daxq4cnYBk");
        language.setAlpha2("jS");
        language.setLanguageIcon("COy2XCeWEstNb5rV0GknI6rFRnTiV6KNoWC9RfDH2bm4KC56eU");
        language.setAlpha4("FugC");
        language.setLanguageDescription("9DtxS6W5raFAo8XDHpFpN5kwlVMltnLK0M1tDHIpXjR4tRwCKw");
        language.setLanguage("RZkCfkV77uH716Fz2JyGjId4YPo7bmpphhautYETcI90sYdOTH");
        language.setAlpha3("vMc");
        language.setAlpha4parentid(8);
        Language LanguageTest = new Language();
        if (isSave) {
            LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
        }
        Timezone timezone = new Timezone();
        timezone.setGmtLabel("eIdLA0dHNsbabrawlN95T1osDnrN5ADfI15KarR0WNi1qUWRjv");
        timezone.setTimeZoneLabel("5Hr49eqR2cTfwo46AWGqXUQRBuAwNOt12T0knhSa3CWutXz56R");
        timezone.setUtcdifference(1);
        timezone.setCountry("QyTQ2PCA6ecTANvPiZxnLo2Ba4DLPi62om1poHrsIRmOw32OlB");
        timezone.setCities("h9hD775z1DQB1EgUkvPmOErXa2i0RiUM7q9Gq3QfAPpH5LOxGX");
        corecontacts.setEmailId("1jDnXnS9LaX8HYfRNGNpfTbYzDmvK2wFEeasNOM9srDbD4GW8o");
        corecontacts.setMiddleName("yeBnzv7kiQaTPFWW2C70BpqZQ4bNZfaqa7V3xThsXX6pg6hCxS");
        corecontacts.setNativeLastName("dLYZugfDbej3QXRvGbmdsyFLRx78NokzpEPoygTFYDgoIEk2VX");
        corecontacts.setFirstName("fgeIOWNQiDRDAmWmWkYw4lgzI83DgtUIjQAj0B13lCLIdcoxw4");
        corecontacts.setPhoneNumber("c3g5LB65QlSA6eeiK9kB");
        corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
        corecontacts.setDateofbirth(new java.sql.Timestamp(1475492335501l));
        corecontacts.setLastName("Vok571koXtaqAFsUBRwXsYKZI4xcUMc6mAeBMrnNOEaiM3stlw");
        corecontacts.setNativeFirstName("iYEw6u4Fgy3v9ewC8ppiUe4jgicfNzNMXNvtvHWFTpTmEZDTTN");
        corecontacts.setApproximateDOB(new java.sql.Timestamp(1475492335501l));
        corecontacts.setNativeMiddleName("z4fd9ySZn2LTvtsKDxbfPMCY4htkEx4uLeRvSuLEg0ipimW9h9");
        timezone.setTimeZoneId(null);
        corecontacts.setTimezone(isSave ? timezoneRepository.save(timezone) : timezone);
        if (isSave) {
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
        }
        corecontacts.setAge(75);
        corecontacts.setNativeTitle("iCxtdPUNky0J4aKYCTJUOhX4dx6AXwTpFBocE7TfQpvzBhUBkY");
        java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
        Address address = new Address();
        AddressType addresstype = new AddressType();
        addresstype.setAddressTypeIcon("jaAa1mYpgOwvPUU8wIyIrYnGov4R2JFyfJtaJvOprQDH4ufHg4");
        addresstype.setAddressTypeDesc("BhrgPs5tphz8OFBSkuCrjFxvu37wdsWv7K3vbi6QbgERJR6DW7");
        addresstype.setAddressType("r7mZg1Tx616n9YX3y648fzNHr8qRMEh0NF4gPJg0nLt69XCCff");
        AddressType AddressTypeTest = new AddressType();
        if (isSave) {
            AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
        }
        Country country = new Country();
        country.setCountryName("u9515niZwjiAGiTlTEpAxhDahKnjBpjapweqUikUuXMrk9Xh9y");
        country.setCapitalLatitude(11);
        country.setCapitalLongitude(10);
        country.setCurrencyCode("qR5");
        country.setCountryFlag("OW3hSVzos95f7ljkmmugXj29tWHjMfpuCdbouQIhf2uf8OVBFz");
        country.setCountryCode1("juM");
        country.setCurrencyName("PZ3FWCZQ23LkoYnyW3zqLKY7GVuLojF0EPckz81N2cLYmjmG1m");
        country.setIsoNumeric(264);
        country.setCurrencySymbol("9LZTQ8F4CzUuaZUlaxeVmsvAEr7M3qHy");
        country.setCountryCode2("pQD");
        country.setCapital("hZqWPua6s3kL3hdHrb4Aq56ysv3yW3eX");
        Country CountryTest = new Country();
        if (isSave) {
            CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
        }
        State state = new State();
        state.setStateCapital("81ZEhqCOi6J1Ya4oYkyrnNEy5nHc5oMmA7mD8qimln2k735SSj");
        state.setStateCode(1);
        state.setStateDescription("nOtUWgmjMd4jcsLql6f3WRxX2A3TzSbBiLrsg7oxlZdCrUys4q");
        state.setStateCapitalLongitude(10);
        state.setStateFlag("tq1LHTXNzl6JchQWuyOotdawPk5gNm0joooNK7blgzaA9tAXVK");
        state.setStateName("XyVuOGxcZhegfBPXOpOdjE7WWAsRiGRBWGdNVa2kOf58NUIVyQ");
        state.setStateCodeChar2("OZhKUUMOaKYrdmaTrIdAp05HEfYqBdcy");
        state.setStateCapital("ao7gIBkYGA8uiDxwpTZ3iZSHWzi2PvEUrXROIZcEcVUlMBuwP5");
        state.setStateCode(1);
        state.setStateDescription("IJ8oSyddMN3wJ1q6SlyYgFtSeKw02fF4PLsL2fDfjRfFM2whJ0");
        state.setStateCapitalLongitude(9);
        state.setStateFlag("XoAtD9YqHxHKlAZxfLEDUtL9zeu8fL93D80mBStBqHqdjnfS0A");
        state.setStateName("D7KacLPQUiEX6df76lrp38ayMhEjcTLPUyy3Gu0V2pT56PJcSs");
        state.setStateCodeChar2("yEWMdGe2EG8eZtBfOIdWNY5uipZ7jhsW");
        state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        state.setStateCodeChar3("px3rSaq3VO9TbKHQ8BsWikuqHFcDC6iC");
        state.setStateCapitalLatitude(9);
        State StateTest = new State();
        if (isSave) {
            StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
        }
        City city = new City();
        city.setCityCode(1);
        city.setCityCode(3);
        city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityFlag("bbhvEqfSAKYLxSdLZOgeCRfsOXPvq3yDBKB1wqvpfAyZZGpPh2");
        city.setCityDescription("wOtoDFKRDe69aGWOAl8sNebHspC01QHtkWp2Pcl7K7qcZ2r2fu");
        city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        city.setCityCodeChar2("34e9ggesdWUfmsmgEM6jnKGyfGHJZnEq");
        city.setCityLatitude(1);
        city.setCityName("6y6h88e5Gvo5iHyOyZJfCWQCwvnxO0D9whsiHsMeIdqWXbqEYT");
        city.setCityLongitude(6);
        City CityTest = new City();
        if (isSave) {
            CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
        }
        address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setAddress2("Cn2gyJxpGI0Uo1D12n9kXvxlqEk382YnrGXyu5w7rBR5xwDrGM");
        address.setLatitude("WaYxKAQfqrlxHeJoXvP3Nsb4NMB50kB5seKvk7B21HkQYQ4ACY");
        address.setAddress3("hGAlK2Shn9N2fApqoETJp7wPkmbSxwo0zMGNDcCMjJ3QCxG84U");
        address.setZipcode("dG2LGi");
        address.setLongitude("FHLzA00yYHFNJKGpmXUiUlxWacSpGZ8PNeiuRKyNzG3KMg89t6");
        address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
        address.setAddress1("WjfiUPvLgux2n0IflSZJl3nUynuHU6g7FXE051CLwoFqQGafCm");
        address.setAddressLabel("d03N1qBuI8T");
        listOfAddress.add(address);
        corecontacts.addAllAddress(listOfAddress);
        UserDetail userdetail = new UserDetail();
        userdetail.setChangePasswordNextLogin(1);
        userdetail.setPasswordAlgo("8qV6m5jlYJHvMuRR0nuBeqfNbe4y0mhxJhKhhG7ziBGLfvrZKS");
        userdetail.setUserAccessCode(18996);
        userdetail.setGenTempOneTimePassword(1);
        userdetail.setIsLocked(1);
        userdetail.setAllowMultipleLogin(1);
        userdetail.setMultiFactorAuthEnabled(1);
        UserAccessLevel useraccesslevel = new UserAccessLevel();
        useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
        useraccesslevel.setLevelIcon("ocqYn5bgAnQf0euVpsdHHbHPVArCwct2DrD6GDaX2o6rw10FGY");
        useraccesslevel.setLevelDescription("KYYidRbi8ejm7PgC13G9UkNVYssPpp5jO2K4kXFKDLHVmi2C6w");
        useraccesslevel.setLevelHelp("9hKZkWaqAtonRqo59s69qQbzWuXR9FOA6A0AXgpQmLfSEpVRfR");
        useraccesslevel.setLevelName("uiD5qLCcMyWT0JFn81Hx2qd7abZePkZXAQ9vtTrS4u4SQcrnVJ");
        UserAccessLevel UserAccessLevelTest = new UserAccessLevel();
        if (isSave) {
            UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
        }
        UserAccessDomain useraccessdomain = new UserAccessDomain();
        useraccessdomain.setDomainIcon("E9tMTZHF4jenZdcZtUHNgXs8gw4Cz6gBfcaNzPGNsK1TucWIqW");
        useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
        useraccessdomain.setDomainDescription("Lyh3sd1oZoVFlWvak3vLFTRquQNm9IrXuSZ5HgKCWyEK8vOjB4");
        useraccessdomain.setDomainHelp("nk1JOX3sEB2YnMLLm8nJU5PeD78OT66IgurMnXrdL04JhtxFN1");
        useraccessdomain.setDomainName("lvgsKg0qqhEf5q6khOhQdJgpP3GrZvE783pOzLVgwipaK4ebDx");
        UserAccessDomain UserAccessDomainTest = new UserAccessDomain();
        if (isSave) {
            UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
        }
        userdetail.setChangePasswordNextLogin(1);
        userdetail.setPasswordAlgo("wcDcq5TmYjaKP53NwqJTI9RU0BE0spmbppxTJjqCQv9WOZo4yQ");
        userdetail.setUserAccessCode(14143);
        userdetail.setGenTempOneTimePassword(1);
        userdetail.setIsLocked(1);
        userdetail.setAllowMultipleLogin(1);
        userdetail.setMultiFactorAuthEnabled(1);
        userdetail.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey()); /* ******Adding refrenced table data */
        userdetail.setPasswordExpiryDate(new java.sql.Timestamp(1475492335810l));
        userdetail.setIsDeleted(1);
        userdetail.setLastPasswordChangeDate(new java.sql.Timestamp(1475492335811l));
        userdetail.setSessionTimeout(878);
        userdetail.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
        java.util.List<PassRecovery> listOfPassRecovery = new java.util.ArrayList<PassRecovery>();
        PassRecovery passrecovery = new PassRecovery();
        Question question = new Question();
        question.setQuestionDetails("dqpOKEBYET3E5JbgAU51Y4RkoK2tSB9Xd7EdrnWcWvmkHkNIss");
        question.setQuestion("gajVRqYvJzA0MttADK8pJ1QqecChmsp534qcEUakii9TB40dNS");
        question.setLevelid(11);
        question.setQuestionIcon("SyNJblFt5ILWAwgbdxV73YVrCj6BdJ7TCGBAj89UeOV44zLvBM");
        Question QuestionTest = new Question();
        if (isSave) {
            QuestionTest = questionRepository.save(question);
            map.put("QuestionPrimaryKey", question._getPrimarykey());
        }
        passrecovery.setUserDetail(userdetail);
        passrecovery.setAnswer("2YP79L5Rnjqup4eRH0Np4VdjBfu0DK3pnKbVwLWaluO5SxV8I6");
        passrecovery.setQuestionId((java.lang.String) QuestionTest._getPrimarykey());
        listOfPassRecovery.add(passrecovery);
        userdetail.addAllPassRecovery(listOfPassRecovery);
        UserData userdata = new UserData();
        userdata.setPassword("h0UAjineyloGJcCcSk9TGbdkTEtwj2vR2nLHEuVG7kh6eZfTdD");
        userdata.setLast5Passwords("1bwYuKwvZP6VhVDdmbnGFNTZEAHwOosmJ8jW55SdDuzgR92nsM");
        userdata.setOneTimePasswordGenDate(new java.sql.Timestamp(1475492335972l));
        userdata.setOneTimePasswordExpiry(11);
        userdata.setOneTimePassword("2gVXdSSawttlet2m6pKOmO4EYWgI879E");
        userdata.setPassword("boM3MuGoQhexN6YLg04e2JSmsSl2YjVf4fSNbZkQ1eK1QuoQZK");
        userdata.setLast5Passwords("5dXaBk3p5i9oRg4L7VJCixTb6VvKzHoLi7dlumXQkzGjcwLPsk");
        userdata.setOneTimePasswordGenDate(new java.sql.Timestamp(1475492335990l));
        userdata.setOneTimePasswordExpiry(6);
        userdata.setOneTimePassword("Ry9bU5m0Bcz8Zm0y701moNQ2vYs3mIOj");
        userdata.setUserDetail(userdetail);
        userdetail.setUserData(userdata);
        Login login = new Login();
        login.setIsAuthenticated(true);
        login.setFailedLoginAttempts(9);
        corecontacts.setContactId(null);
        login.setCoreContacts(corecontacts);
        login.setServerAuthImage("vghX6N6L5TPMh65sbmiwfVMMWNtUJsIX");
        login.setLoginId("t5SyIHVUscWt41SHXd6we5p6WiJx5n4MOT4VRBdKGskoGfiBtQ");
        userdetail.setUserId(null);
        login.setUserDetail(userdetail);
        login.setServerAuthText("qvZ8yjVz8P4OuIZq");
        login.setEntityValidator(entityValidator);
        return login;
    }

    @Test
    public void test1Save() {
        try {
            Login login = createLogin(true);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserDetailPrimaryKey", login.getUserDetail()._getPrimarykey());
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private UserDetailRepository<UserDetail> userdetailRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private QuestionRepository<Question> questionRepository;

    @Test
    public void test2Update() {
        try {
            Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(5);
            login.setVersionId(1);
            login.setServerAuthImage("sBS8MJU1ImLvWi8OepSbrbnFr9gvPqq2");
            login.setLoginId("j46zH1d6y7Eav2gK1vZGXyAaUCIthjCDkVv5z4RB9AlCkIUUuR");
            login.setServerAuthText("JRyMSsEfQ7MQnDtX");
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (java.lang.Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test6Delete() {
        try {
            Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            questionRepository.delete((java.lang.String) map.get("QuestionPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey"));
        } catch (Exception e) {
            Assert.fail(e.getMessage());
        }
    }

    private void validateLogin(EntityTestCriteria contraints, Login login) throws Exception {
        if (contraints.getRuleType() == MIN_MAX) {
            login.isValid();
        } else if (contraints.getRuleType() == NOT_NULL) {
            login.isValid();
        } else if (contraints.getRuleType() == REGEX) {
            login.isValid();
        } else if (contraints.getRuleType() == UNIQUE) {
            loginRepository.save(login);
        }
    }

    private List<EntityTestCriteria> addingListOfFieldForNegativeTesting() {
        List<EntityTestCriteria> entityConstraints = new java.util.ArrayList<EntityTestCriteria>();
        entityConstraints.add(new EntityTestCriteria(NOT_NULL, 1, "loginId", null));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 2, "loginId", "pUaxUGpbQ28S5lpn0RQVUOQUTF5ihVjeM1GcoAx5kujQKvUPCMfhJi9sITyBF1visUN49APdE8p4kzIds6BkCUe22sJaXeMFjonGFi2jqnK3RMfxdMcJg2EhgcQWunRRwXellNcxWHsnLWaB3S06jt46VLhTnnoHlfLsqjhMRaz5pqQSeQgKyycTdjFakRDZsi8ziPKGL"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 3, "serverAuthImage", "V9utVUo7ykojsdraPI9QR19DyyV1A3rDe"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 4, "serverAuthText", "pvcjlTSb9lXd16BSL"));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 5, "failedLoginAttempts", 21));
        entityConstraints.add(new EntityTestCriteria(MIN_MAX, 6, "isAuthenticated", true));
        return entityConstraints;
    }

    @Test
    public void test5NegativeTesting() throws NoSuchMethodException, SecurityException, IllegalArgumentException, IllegalAccessException, NoSuchFieldException, Exception {
        int failureCount = 0;
        for (EntityTestCriteria contraints : this.entityConstraint) {
            try {
                Login login = createLogin(false);
                java.lang.reflect.Field field = null;
                if (!contraints.getFieldName().equalsIgnoreCase("CombineUniqueKey")) {
                    field = login.getClass().getDeclaredField(contraints.getFieldName());
                }
                switch(((contraints.getTestId()))) {
                    case 0:
                        break;
                    case 1:
                        field.setAccessible(true);
                        field.set(login, null);
                        validateLogin(contraints, login);
                        failureCount++;
                        break;
                    case 2:
                        login.setLoginId(contraints.getNegativeValue().toString());
                        validateLogin(contraints, login);
                        failureCount++;
                        break;
                    case 3:
                        login.setServerAuthImage(contraints.getNegativeValue().toString());
                        validateLogin(contraints, login);
                        failureCount++;
                        break;
                    case 4:
                        login.setServerAuthText(contraints.getNegativeValue().toString());
                        validateLogin(contraints, login);
                        failureCount++;
                        break;
                    case 5:
                        login.setFailedLoginAttempts(Integer.parseInt(contraints.getNegativeValue().toString()));
                        validateLogin(contraints, login);
                        failureCount++;
                        break;
                    case 6:
                        break;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if (failureCount > 0) {
            Assert.fail();
        }
    }
}
