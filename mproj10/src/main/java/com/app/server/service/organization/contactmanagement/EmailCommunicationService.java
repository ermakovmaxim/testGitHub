package com.app.server.service.organization.contactmanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.utils.bean.ResponseBean;
import org.springframework.http.HttpEntity;
import com.app.bean.PaginationBean;
import com.app.shared.organization.contactmanagement.EmailCommunication;
import java.util.List;
import com.athena.server.pluggable.utils.bean.FindByBean;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "Service for EmailCommunication Transaction table", complexity = Complexity.MEDIUM)
public abstract class EmailCommunicationService {

    abstract HttpEntity<ResponseBean> findAll() throws Exception;

    abstract HttpEntity<ResponseBean> findPageWiseData(PaginationBean paginationBean) throws Exception;

    abstract HttpEntity<ResponseBean> save(EmailCommunication entity) throws Exception;

    abstract HttpEntity<ResponseBean> save(List<EmailCommunication> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> delete(String id) throws Exception;

    abstract HttpEntity<ResponseBean> update(EmailCommunication entity) throws Exception;

    abstract HttpEntity<ResponseBean> update(List<EmailCommunication> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> findByCommType(FindByBean findByBean) throws Exception;

    abstract HttpEntity<ResponseBean> findById(FindByBean findByBean) throws Exception;
}
